//CORS Cross Origin Resource Sharing
//Because of security reason sites from one domain should leverage the 
//Backend api with same domain.
//for example fb.com should used apin from fb.com/v1/contact
//If JS in fb.com requests data from twitter.com by defualt browser blocks it
//CORS gives you ability to whitelist such domains for data
//in request browser sends Origin: fb.com
//Backend api sends back Access-Control-Allowed-Origin: * / fb.com