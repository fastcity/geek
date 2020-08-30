package credentialstorage

type CredentialStorageI interface {
	GetPwdByID(string) string
}
