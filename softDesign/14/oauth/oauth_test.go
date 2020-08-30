package oauth

import (
	"log"
	"testing"
	"time"

	"fastcity/geek/softDesign/14/oauth/apirequest"
	"fastcity/geek/softDesign/14/oauth/authtoken"
	"fastcity/geek/softDesign/14/oauth/credentialstorage"
)

func TestAuthByUrl(t *testing.T) {
	baseUrl := "www.test.com"
	appid := "id"

	timestamp := time.Now().Unix()

	sqlcs := credentialstorage.NewSQLStorage()
	pwd := sqlcs.GetPwdByID("id")

	token := authtoken.NewAuthTokenByParmas(baseUrl, appid, pwd, timestamp).GetToken()

	clientUrl := apirequest.NewApiRequest(baseUrl, token, appid, timestamp).GenerateURl()

	err := NewOAuth(sqlcs).AuthByUrl(clientUrl)
	if err != nil {
		log.Fatal("test failed", err)
	}

}
