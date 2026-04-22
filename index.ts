import Softphone from "ringcentral-softphone";

const softphone: Softphone = new Softphone({
  domain: "",
  username: "",
  password: "",
  authorizationId: "",
  outboundProxy: "",
});

console.log(softphone);

softphone.revoke();
