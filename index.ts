import Softphone from "ringcentral-softphone";

const softphone = new Softphone({
  domain: "",
  username: "",
  password: "",
  authorizationId: "",
});

console.log(softphone);

softphone.revoke();
