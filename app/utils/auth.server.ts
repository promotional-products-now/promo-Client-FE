import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { sessionStorage } from "./session.server";

const authenticator = new Authenticator(sessionStorage);

authenticator.use(
  new FormStrategy(async ({ form }) => {
    let email = form.get("email");
    let password = form.get("password");

    // Here you should validate and authenticate the user, e.g., with a database
    const user = await validateUser(email, password);

    if (!user) {
      throw new Error("Invalid email or password");
    }

    return user;
  }),
);

async function validateUser(email: string, password: string) {
  // Implement your user validation logic here
  // Return user object if valid, otherwise return null
}

export { authenticator };
