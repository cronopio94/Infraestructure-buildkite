from vault import ManageVault
import os

def main():
    vault = ManageVault('670c386f-ad8e-bbba-ed20-dc2391201284','192589e7-1645-9bfa-d114-f3018459845e')
    result = vault.get_credentials()
    username = result['username']
    password = result['password']
    os.putenv("DOCKER_USERNAME",username)
    os.putenv("DOCKER_PASSWORD", password)

main()    