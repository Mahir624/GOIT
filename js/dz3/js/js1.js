const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";

user.hobby = "skydiving";

user.premium = false;

const entries = Object.keys(user);
for (const key of entries) {
  console.log(key, ':', user[key]);
}
