import Softphone from "ringcentral-softphone";
import process from "node:process";

const softphone: Softphone = new Softphone({
  domain: process.env.SIP_INFO_DOMAIN ?? "",
  username: process.env.SIP_INFO_USERNAME ?? "",
  password: process.env.SIP_INFO_PASSWORD ?? "",
  authorizationId: process.env.SIP_INFO_AUTHORIZATION_ID ?? "",
  outboundProxy: process.env.SIP_INFO_OUTBOUND_PROXY ?? "",
});

const main = async () => {
  await softphone.register();
  console.log("Softphone registered successfully");
  const callSession = await softphone.call(process.env.CALLEE_FOR_TESTING ?? "");
  setTimeout(() => {
    callSession.hangup();
    console.log("Call session ended");
    softphone.revoke();
  }, 5000);
}
main();
