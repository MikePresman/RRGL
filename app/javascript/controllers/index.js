import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus = application

// Manual controller imports
import HelloController from "./hello_controller"
// Import other controllers here as needed
// import AnotherController from "./another_controller"

// Register controllers
application.register("hello", HelloController)
// Register other controllers
// application.register("another", AnotherController)

export { application }