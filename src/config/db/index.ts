import mongoose from 'mongoose';

async function connect({ user, password }: { user: string; password: string }) {
  try {
    await mongoose.connect(
      `mongodb+srv://${user}:${password}@devconnector.yonbx.mongodb.net/blog_f8?retryWrites=true&w=majority`,
    );
    console.log('connect to db ok');
  } catch (error) {
    console.log('connect to db err:', error);
  }
}

export { connect };
