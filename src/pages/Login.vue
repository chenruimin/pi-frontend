<template>
  <div>
    <div class="view-login-lg d-none d-lg-block">
      <div class="row" style="margin: 0">
        <div class="logo-container col-lg-4">
          <div class="logo-block">
            <div class="logo"></div>
            <div class="description">
              Automatically personalize your website &amp; email to each visitor.
            </div>
          </div>
        </div>
        <div class="login-container col-lg-8">
          <div class="sign-up">
            Don't have an account? <span>Sign up</span>
          </div>
          <div class="form-container">
            <div class="form-title">
              <h3>Sign in to DataCue</h3>
            </div>
            <form>
              <div class="form-group">
                <label>Email</label>
                <input v-model="fields.email" type="email" class="form-control" placeholder="Enter email">
              </div>
              <div class="form-group">
                <div class="password-field-header">
                  <label>Password</label>
                  <span>Show password</span>
                </div>
                <input v-model="fields.password" type="password" class="form-control" placeholder="Password">
              </div>
              <div class="button-block">
                <button type="submit" class="btn" @click="handleSubmit">Submit</button>
              </div>
            </form>
          </div>
          <div class="copyright">2019 All Rights Reserved to DataCue</div>
        </div>
      </div>
    </div>
    <div class="view-login-md d-sm-block d-md-block d-lg-none">
      <div class="logo-container">
        <div class="logo-block">
          <div class="logo"></div>
          <div class="description">
            Automatically personalize your website &amp; email to each visitor.
          </div>
        </div>
      </div>
      <div class="login-container">
          <div class="sign-up">
            Don't have an account? <span>Sign up</span>
          </div>
          <div class="form-container">
            <div class="form-title">
              <h3>Sign in to DataCue</h3>
            </div>
            <form>
              <div class="form-group">
                <label>Email</label>
                <input v-model="fields.email" type="email" class="form-control" placeholder="Enter email">
              </div>
              <div class="form-group">
                <label>Password</label>
                <input v-model="fields.password" type="password" class="form-control" placeholder="Password">
                <div class="password-meta">
                  <span>Show password</span>
                </div>
              </div>
              <button type="submit" class="btn" @click="handleSubmit">Submit</button>
            </form>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Login',
  computed: {
    ...mapState({
      fields: state => state.fields,
      isLoggedIn: state => state.isLoggedIn,
    }),
  },
  watch: {
    isLoggedIn (val) {
      if (val) {
        this.$router.push({ path: '/dashboard' })
      }
    }
  },
  methods: {
    ...mapActions(['fetchLogin', 'resumeLogin']),
    handleSubmit () {
      this.fetchLogin();
    }
  }
}
</script>

<style lang="scss">
.view-login-lg {
  height: 100vh;

  .logo-container {
    height: 100vh;
    background-color: #fcf3e4;
    background-image: url(../assets/img/login/squares-background.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;

    .logo-block {
      display: flex;
      flex-direction: column;
      align-items: center;

      .logo {
        width: 196px;
        height: 47px;
        background-image: url(../assets/img/login/logo.svg);
        background-repeat: no-repeat;
      }

      .description {
        width: 300px;
        margin: 20px 0;
        font-size: 20px;
      }
    }
  }

  .login-container {
    padding: 20px;

    .sign-up {
      text-align: right;
      span {
        color: #f2ba42;
        cursor: pointer;
      }
    }

    .form-container {
      padding: 0 70px;

      .form-title {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        text-align: center;
        height: 130px;
        border-bottom: 1px solid #bbb;
        margin: 70px 0;
        background-image: url(../assets/img/login/plants-left.svg);
        background-repeat: no-repeat;
      }

      .form-group {
        margin-bottom: 30px;

        .password-field-header {
          display: flex;
          justify-content: space-between;
          align-items: center;

          span {
            cursor: pointer;
          }
        }

        input {
          &:focus {
            border: 1px solid #f2ba42;
          }
        }
      }

      .button-block {
        height: 130px;
        background-image: url(../assets/img/login/plants-right.svg);
        background-repeat: no-repeat;
        background-position: top right;
        display: flex;
        align-items: flex-end;

        button {
          background-color: #f2ba42;
          border-color: #f2ba42;
          margin-bottom: 30px;
        }
      }
    }

    .copyright {
      position: absolute;
      bottom: 0;
      text-align: center;
      width: calc(100% - 40px);
    }
  }
}

.view-login-md {
  .logo-container {
    height: 100vw;
    background-image: url(../assets/img/login/background-with-squares.svg);
    display: flex;
    justify-content: center;
    align-items: flex-end;

    .logo-block {
      display: flex;
      flex-direction: column;
      align-items: center;

      .logo {
        width: 196px;
        height: 47px;
        background-image: url(../assets/img/login/logo.svg);
        background-repeat: no-repeat;
      }

      .description {
        width: 300px;
        margin: 40px 0;
        font-size: 20px;
      }
    }
  }

  .login-container {
    .sign-up {
      margin: 20px 0;
      text-align: center;
      span {
        color: #f2ba42;
        cursor: pointer;
      }
    }

    .form-container {
      padding: 0 20px;

      .form-title {
        margin: 20px auto;
        text-align: center;
        
        h3 {
          display: inline-block;
          border-bottom: 1px solid #bbb;
        }
      }

      .form-group {
        input {
          &:focus {
            border: 1px solid #f2ba42;
          }
        }

        .password-meta {
          text-align: right;
          padding: 5px 0;

          span {
            cursor: pointer;
          }
        }
      }

      button {
        background-color: #f2ba42;
        border-color: #f2ba42;
        margin-bottom: 30px;
        width: 100%;
      }
    }
  }
}
</style>
