
## install jest
1. npm install --save-dev jest

# upgrade fandogh cli

1. pip install fandogh_cli --upgrade

# run service 
1. fandogh login  --username mohsenxad --password ********
1. fandogh login  --username ******** --password ********
2. fandogh source run
3. fandogh service logs -f --name payment-api


# deploy proxy service
1. fandogh login  --username mohsenxad --password ********
2. fandogh managed-service deploy proxy 1 -c service_name=proxy
3. fandogh service apply
your proxy server IP address will be in 159.69.220.0/24 range