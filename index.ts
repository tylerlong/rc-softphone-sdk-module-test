import Softphone from "ringcentral-softphone";

const softphone: Softphone = new Softphone({
  domain: "",
  username: "",
  password: "",
  authorizationId: "",
});

console.log(softphone);

softphone.revoke();
