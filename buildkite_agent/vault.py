import hvac

class ManageVault:
    
    def __init__(self, role_id, role_secret_id):
        self.mount_point = "kv"
        self.url = "vault://vault:8200"
        self.base_client = hvac.Client(self.url)
        self.base_client.auth_approle(role_id, secret_id = role_secret_id)
        self.base_client.is_authenticated()
    
    def _read_secret(self, path):
        return self.base_client.secrets.kv.v2.read_secret_version(mount_point=self.mount_point, path=path)['data']['data']
    
    def get_credentials(self):
        path = "quay-login" 
        return self._read_secret(path)