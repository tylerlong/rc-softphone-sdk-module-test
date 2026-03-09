import SoftphoneModule from "ringcentral-softphone";

const Softphone =
  (SoftphoneModule as unknown as { default?: typeof SoftphoneModule })
    .default ??
    SoftphoneModule;

const softphone = new Softphone({
  domain: "",
  username: "",
  password: "",
  authorizationId: "",
});

console.log(softphone);

softphone.revoke();
