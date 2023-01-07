import { Context, storage } from "near-sdk-as"

export class Greeting 
{
    getGreeting(accountID: string) : string | null
    {
      return storage.get<String>(accountID, "The Greeting Is Not Avialable");
    }

    setGreeting(greeting: string) : void
    {
        storage.set(Context.sender, greeting);
    }
}

