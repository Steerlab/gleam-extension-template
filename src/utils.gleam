@external(javascript, "./extension.ffi.mjs", "isDev")
fn is_dev() -> Bool

@external(javascript, "./extension.ffi.mjs", "getURL")
fn do_get_url(path: String) -> String

pub fn get_url(path: String) {
  case is_dev() {
    True -> "http://localhost:5173" <> path
    False -> do_get_url(path)
  }
}
