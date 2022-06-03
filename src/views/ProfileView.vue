<template>
  <div>
    <Header />
    <main class="main css-6q12pm">
      <div class="css-108ucgm2" style="text-align:center">
        <div class="binance-row css-16kn2us">
          <div class="binance-col css-1wz0uwi">
            <div class="css-1wmiyp6" style="margin:0;">
              <div class="css-1vn55vu" style="margin:0;">
                <div class="css-av7pnt">
                  <div class="css-vurnku">
                    <div data-bn-type="text" class="css-152kxht">
                      Total Account Assets Conversion
                    </div>
                    <div data-bn-type="text" class="css-ojbpe7">
                      {{balance}} USDT
                    </div>
                    <div style="margin-top:30px; text-align:center">
                      <el-select v-model="type" @change="change" placeholder="chain name">
                        <el-option label="ERC20-USDT" value="ERC20"></el-option>
                        <el-option label="TRC20-USDT" value="TRC20"></el-option>
                      </el-select>
                      <div data-bn-type="text" class="css-152kxht" style="margin-top:20px;margin-bottom:10px;">
                        Your deposit address:
                      </div>
                      <div data-bn-type="text" class="css-152kxht"  style="margin-bottom:10px;">
                        {{address}}
                      </div>
                      <vueQr :margin="8" v-if="address" :size="200" :whiteMargin="true" :logoMargin= "3" :logoCornerRadius="20" :text="address"> </vueQr>
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
import {getBalance, getCoin} from '@/api/user'
import vueQr from 'vue-qr'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: 'ProfileView',
  components: {Footer, Header, vueQr},
  data() {
    return {
      balance: 0,
      type: '',
      user: {},
      address: '',
    }
  },
  created(){
    this.init()
  },
  methods: {
    init() {
      this.getbalance()
    },
    getbalance(){
      this.$loading()
      let user = JSON.parse(localStorage.getItem('user'))
      if(!user || !user.id){
        this.$router.push('/reg')
      }
      this.user = user
      getBalance('member='+user.id+'&coinType=SPOT').then(res => {
        this.$loading().close()
        this.balance = res.data.result.usdtPrice

      }).catch(e => {
        this.$message.error('Error')
      })
    },
    change(v){
      getCoin('cname='+this.type+'&member='+ this.user.id).then(res => {
        if(res.data.status == 'SUCCEED'){
          this.address = res.data.result.address
        }else{
          this.address = ''
        }
      }).catch(e => {
        this.address = ''
      })
    },
  }
}
</script>

<style scoped>

</style>
