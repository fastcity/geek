package oauth

import (
	"errors"

	"fastcity/geek/softDesign/14/oauth/apirequest"
	"fastcity/geek/softDesign/14/oauth/authtoken"
	"fastcity/geek/softDesign/14/oauth/credentialstorage"
)

type OAuth struct {
	cs credentialstorage.CredentialStorageI
}

func NewOAuth(cs credentialstorage.CredentialStorageI) *OAuth {
	if cs == nil {
		cs = credentialstorage.NewSQLStorage()
	}
	return &OAuth{
		cs,
	}
}

func (oa *OAuth) AuthByUrl(url string) error {
	aq := apirequest.BuildFromURL(url)
	return oa.AuthByApiRequest(aq)
}

func (oa *OAuth) AuthByApiRequest(aq *apirequest.ApiRequest) error {
	appid := aq.GetAppid()
	token := aq.GetToken()
	baseUrl := aq.GetBaseURL()
	timestamp := aq.GetTimestamp()

	clientAuthToken := authtoken.NewAuthTokenByDefault(token, timestamp)
	if clientAuthToken.IsExpired() {
		return errors.New("clientAuthToken is Expired")
	}

	password := oa.cs.GetPwdByID(appid)
	serverToken := authtoken.NewAuthTokenByParmas(baseUrl, appid, password, timestamp)

	if !serverToken.Match(clientAuthToken) {
		return errors.New("token verfication failed")
	}
	return nil

}
