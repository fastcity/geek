package apirequest

import (
	"fmt"
	"strconv"
	"strings"
)

/*
* 主要是URL 的生成 、解析
* 1. 将 token、AppID、时间戳拼接到 URL 中，形成新的 URL
* 2. 解析 URL，得到 token、AppID、时间戳等信息
 */

type ApiRequest struct {
	baseURL   string
	token     string
	appid     string
	timestamp int64
}

// NewApiRequest New ApiRequest
func NewApiRequest(baseURL, token, appid string, timestamp int64) *ApiRequest {
	return &ApiRequest{
		baseURL,
		token,
		appid,
		timestamp,
	}
}

func (api *ApiRequest) GenerateURl() string {
	return fmt.Sprintf("%s?appid=%s&timestamp=%d&token=%s", api.baseURL, api.appid, api.timestamp, api.token)
}

// BuildFromURL URL 解析 url?a=1&b=2
func BuildFromURL(URL string) *ApiRequest {
	// todo
	strs := strings.Split(URL, "?")
	pars := make(map[string]string, 0)

	if len(strs) > 1 {
		pars["url"] = strs[0]
		for i := 1; i < len(strs); i++ {
			str := strs[i]
			if strings.Contains(str, "=") {
				ps := strings.Split(str, "=")
				pars[ps[0]] = ps[1]
			} else {

			}
		}

	}

	timestamp, _ := strconv.ParseInt(pars["timestamp"], 0, 64)

	fmt.Println("-----", pars["timestamp"], timestamp)
	return &ApiRequest{
		baseURL:   pars["url"],
		token:     pars["token"],
		appid:     pars["appid"],
		timestamp: timestamp,
	}
}

func (api *ApiRequest) GetBaseURL() string {
	return api.baseURL
}

func (api *ApiRequest) GetToken() string {
	return api.token
}

func (api *ApiRequest) GetAppid() string {
	return api.appid
}

func (api *ApiRequest) GetTimestamp() int64 {
	return api.timestamp
}
