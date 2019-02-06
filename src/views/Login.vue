<template>
  <div class="login">
    <LoginForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from "@/components/LoginForm/LoginForm.vue";

export default {
  name: "login",
  components: {
    LoginForm
  }
};
</script>
