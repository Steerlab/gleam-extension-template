import gleam/dynamic.{type Dynamic}
import lustre
import lustre/effect
import lustre/element/html

pub fn main() {
  let assert Ok(_dispatch) =
    view
    |> lustre.application(init, update, _)
    |> lustre.start("#app", Nil)
}

pub type Model =
  Int

pub type Msg {
  None
}

fn init(_flags) {
  #(0, effect.none())
}

fn update(model: Model, msg: Msg) {
  case msg {
    None -> #(model, effect.none())
  }
}

@external(javascript, "./extension.ffi.mjs", "subscribe")
fn do_subscribe(callback: fn(Dynamic) -> Nil) -> Nil

fn subscribe() {
  use dispatch <- effect.from()
  do_subscribe(fn(dyn) { Nil })
}

fn view(model: Model) {
  html.div([], [])
}
