const local = "http://localhost:5000";
const production = "https://myshopapi-lmwm.onrender.com";

let base_url = "";
let mode = "pro";
if (mode === "pro") {
  base_url = production;
} else {
  base_url = local;
}

export { base_url };
