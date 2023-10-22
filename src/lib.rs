mod utils;
extern crate serde_json_wasm;

use wasm_bindgen::prelude::*;
use js_sys::JSON;

#[wasm_bindgen]
pub fn say(s: &str) -> String {
  let mut message = String::from("hello ");
  message.push_str(&s);
  return message
}

#[wasm_bindgen]
pub fn add(a: u8, b: u8) -> u8 {
  return a + b;
}

#[wasm_bindgen]
pub fn parse(s: &str) -> JsValue {
    let parsed = JSON::parse(&s).unwrap();
    
    return parsed
}
