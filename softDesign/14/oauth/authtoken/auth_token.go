// Package authtoken token 相关
// 把 URL、AppID、密码、时间戳拼接为一个字符串；
// 对字符串通过加密算法加密生成 token；
// 根据时间戳判断 token 是否过期失效；
// 验证两个 token 是否匹配
package authtoken

import (
	"crypto/md5"
	"encoding/hex"
	"fmt"
	"time"
)

var defaultExpired int64 = 60

type AuthToken struct {
	token      string
	createTime int64
	expired    int64
}

func NewAuthToken(token string, timestamp, expired int64) *AuthToken {
	if expired == 0 {
		expired = defaultExpired
	}

	oa := &AuthToken{
		token,
		timestamp,
		expired,
	}

	return oa
}

func NewAuthTokenByDefault(token string, timestamp int64) *AuthToken {
	return NewAuthToken(token, timestamp, 0)
}

func NewAuthTokenByParmas(baseUrl, appid, password string, timestamp int64) *AuthToken {

	at := NewAuthTokenByDefault("", timestamp)
	at.token = at.GenerateToken(baseUrl, appid, password)

	return at
}

func (at *AuthToken) SetExpiredTime(expired int64) *AuthToken {
	at.expired = expired
	return at
}

func (at *AuthToken) IsExpired() bool {
	now := time.Now().Unix()
	return now > at.createTime+at.expired

}

func (at *AuthToken) GenerateToken(url, appid, password string) string {

	str := fmt.Sprintf("%s&%s&%d&%s", url, appid, at.createTime, password)
	h := md5.New()
	h.Write([]byte(str))
	at.token = hex.EncodeToString(h.Sum(nil))
	return at.token
}

func (at *AuthToken) GetToken() string {
	return at.token
}

func (at *AuthToken) Match(at2 *AuthToken) bool {
	return at.token == at2.token
}
