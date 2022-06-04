<template>
  <div>
    <Header />
    <main class="main css-6q12pm" style="height: calc(100vh - 207px)">
      <div class="css-108ucgm">
        <div class="binance-row css-16kn2us" style="margin-left: -12px; margin-right: -12px;">
          <div class="binance-col binance-col-4 css-vurnku" style="padding-left: 12px; padding-right: 12px;">
          </div>
          <div class="binance-col css-1wz0uwi" style="padding-left: 12px; padding-right: 12px; flex: 1 1 auto;">
            <div class="css-1wmiyp6">
              <div class="css-1vn55vu">
                <div class="css-av7pnt">
                  <div class="css-vurnku">
                    <div data-bn-type="text" class="css-ojbpe7">
                      Enter Account Details
                    </div>
                    <div class="css-15hjz8p" v-if="login == '2'">
                      <div data-bn-type="text" class="css-152kxht">
                        Enter your account details and a strong password to secure your account.
                      </div>
                    </div>
                    <div class="css-vurnku" v-if="login == '2'">
                      <el-form ref="form" status-icon :rules="rules" :model="form" label-width="80px" >
                        <el-form-item label="email" prop="email">
                          <el-input v-model="form.email" placeholder="Please enter your email"></el-input>
                        </el-form-item>
                        <el-form-item label="code" prop="code">
                          <el-input v-model="form.code" style="width:60%"  placeholder="Verification code"></el-input>
                          <el-button type="primary" @click="getemailcode" :disabled="disabled" style="width:35%;margin-left:5%" >{{codeText}}</el-button>
                        </el-form-item>
                        <el-form-item label="password" prop="password">
                          <el-input v-model="form.password" type="password" placeholder="Please enter your password"></el-input>
                        </el-form-item>
                        <el-form-item label="confirm" prop="password2">
                          <el-input v-model="form.password2" type="password" placeholder="Please repeat the password"></el-input>
                        </el-form-item>
                        <el-form-item label="invite" v-if="!invite">
                          <el-input v-model="form.invite" placeholder="Please repeat the invite"></el-input>
                        </el-form-item>
                        <el-form-item>
                          <el-button type="primary" @click="reg" style="width:100%">Submit</el-button>
                        </el-form-item>
                      </el-form>
                      <div style="text-align:right; font-size:14px; color: #499C7A;">
                        <span style="cursor:pointer" @click="toLogin">Login</span>
                      </div>
                    </div>
                    <div class="css-15hjz8p" v-if="login != '2'">
                      <div data-bn-type="text" class="css-152kxht">
                        Enter the correct email address and password in a secure environment.
                      </div>
                    </div>
                    <div class="css-vurnku" v-if="login != '2'">
                      <el-form ref="form" status-icon :rules="rules" :model="form" label-width="80px" >
                        <el-form-item label="email" prop="email">
                          <el-input v-model="form.email" placeholder="Please enter your email"></el-input>
                        </el-form-item>
                        <el-form-item label="password" prop="password">
                          <el-input v-model="form.password" type="password" placeholder="Please enter your password"></el-input>
                        </el-form-item>
                        <el-form-item>
                          <el-button type="primary" @click="loginuser" style="width:100%">Submit</el-button>
                        </el-form-item>
                      </el-form>
                      <div style="text-align:right; font-size:14px; color: #499C7A;">
                        <span style="cursor:pointer" @click="toRegister">Register</span>
                      </div>
                    </div>
                    <div class="css-vurnku">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {getCode, register, login} from '@/api/user'
import {hbmd5} from '@/api/md5'

export default {
  name: 'RegisterView',
  components: {Footer, Header},
  data() {
    var validateEmail = (rule, value, callback) => {
      if (value.indexOf('@') == -1 || value.indexOf('.') == -1) {
        callback(new Error('The email format is incorrect'));
        this.emailV = false
      } else {
        this.emailV = true
        callback();
      }
    };
    var validatePwd = (rule, value, callback) => {
      if (this.form.password != this.form.password2) {
        callback(new Error('The passwords are inconsistent'));
      } else {
        callback();
      }
    };
    return {
      invite: '',
      login: '',
      codeText: 'Send',
      disabled: false,
      emailV: false,
      form: {
        email: '',
        code: '',
        password: '',
        password2: '',
        invite: '',
      },
      rules: {
        email: [
          { required: true, message: 'Please enter your email', trigger: 'blur' },
          { validator: validateEmail, trigger: 'blur' }
        ],
        code: [
          {required: true, message: 'Please enter your code', trigger: 'blur'}
        ],
        password: [
          {required: true, message: 'Please enter your password', trigger: 'blur'}
        ],
        password2: [
          {validator: validatePwd, trigger: 'blur'},
          {required: true, message: 'Please repeat the password', trigger: 'blur'}
        ]
      }
    }
  },
  created(){
    let login = this.$route.query.login
    this.login = login
    let invite = this.$route.query.invite
    this.invite = invite
  },
  methods: {
    meta() {
      // this.$router.push({
      //     path: '/'
      // })
    },
    toLogin() {
      this.login = 1
      // this.$router.push({
      //       path: '/reg',
      //   })
    },
    toRegister(){
      this.login = 2
      // this.$router.push({
      //       path: '/reg?login=2',
      //   })
    },
    init() {

    },
    onSubmit() {

    },
    getemailcode(){
      if(this.emailV){
        this.$loading()
        //发送验证码
        let mailbox = this.form.email
        let type = "REGISTER"
        getCode('?mailbox='+mailbox+'&type='+type).then(res => {
          this.$loading().close()
          if(res.data.status == 'SUCCEED'){
            this.$message.success('Success')
            this.codeMsg(60)
          }else{
            this.$message.error(res.data.errorMessage)
          }
        }).catch(e => {
          this.$loading().close()
          this.$message.error('Error')
        })
      }else{
        this.$refs.form.validateField('email');
      }
    },
    codeMsg(time) {
      let self = this
      self.disabled = true
      self.codeText = time + ' s'
      setTimeout(function(){
        if(time <= 1){
          self.codeText = 'Send'
          self.disabled = false
        }else{
          self.codeMsg(time - 1)
        }
      },1000)
    },
    reg(){
      this.$loading()
      let data = {
        mail: this.form.email,
        password: hbmd5(this.form.password),
        regType: 'MAIL',
        welCode: this.form.invite,
        invite: this.invite
      }
      register(this.form.code, JSON.stringify(data)).then(res => {
        this.$loading().close()
        console.log(res)
        if(res.data.status == 'SUCCEED'){
          this.$message.success('Success')
          this.form = {}
          this.login = '1'
        }else{
          this.$message.error(res.data.errorMessage)
        }

      }).catch(e => {
        this.$loading().close()
      })
    },
    loginuser(){
      this.$loading()
      login('phMail='+this.form.email+'&password='+hbmd5(this.form.password)).then(res => {
        this.$loading().close()
        console.log()
        if(res.data.status == 'SUCCEED'){
          this.form = {}
          localStorage.setItem('user', JSON.stringify(res.data.result))
          this.$router.push('/profile')
        }else{
          this.$message.error(res.data.errorMessage)
        }
      }).catch(e => {
        this.$message.error('Error')
      })
    }
  }
}
</script>

<style scoped>

</style>
