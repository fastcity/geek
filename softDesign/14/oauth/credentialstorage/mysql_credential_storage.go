package credentialstorage

type SQLStorage struct {
	appid string
}

var testDemo = map[string]string{
	"id": "pwd",
}

func NewSQLStorage() *SQLStorage {
	return &SQLStorage{}
}

func (mysql *SQLStorage) GetPwdByID(appid string) string {
	appid = "id"
	return testDemo[mysql.appid]
}
