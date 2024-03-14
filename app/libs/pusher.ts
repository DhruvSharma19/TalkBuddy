import PusherServer from "pusher";
import PusherClient from "pusher-js";

export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  secret: process.env.PUSHER_SECRET!,
<<<<<<< Updated upstream
  cluster: 'ap2',
=======
<<<<<<< HEAD
  cluster: "ap2",
=======
  cluster: 'ap2',
>>>>>>> cb3fc3a50257e5aa2b5bb41043d7d59e361ad6d0
>>>>>>> Stashed changes
  useTLS: true,
});

export const pusherClient = new PusherClient(
  process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  {
    channelAuthorization: {
      endpoint: "/api/pusher/auth",
      transport: "ajax",
    },
<<<<<<< Updated upstream
    cluster: 'ap2',
=======
<<<<<<< HEAD
    cluster: "ap2",
=======
    cluster: 'ap2',
>>>>>>> cb3fc3a50257e5aa2b5bb41043d7d59e361ad6d0
>>>>>>> Stashed changes
  }
);
