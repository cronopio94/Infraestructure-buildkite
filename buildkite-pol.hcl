# Read-only permission on 'secret/data/mysql/*' path
path "kv/quay-login/*" {
  capabilities = [ "read" ]
}
