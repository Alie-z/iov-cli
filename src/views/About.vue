<template>
  <div class="about">
    <!--    <table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">-->
    <!--      <tr style="">-->
    <!--        <td height="28" style="line-height:28px;">&nbsp;</td>-->
    <!--      </tr>-->
    <!--      <tr>-->
    <!--        <td style="">-->
    <!--          <table border="0" width="280" cellspacing="0" cellpadding="0"-->
    <!--                 style="border-collapse:separate;background-color:#ffffff;border:1px solid #dddfe2;border-radius:3px;font-family:Helvetica, Arial, sans-serif;margin:0px auto;">-->
    <!--            <tr style="padding-bottom: 8px;">-->
    <!--              <td style=""><img class="img"-->
    <!--                src="https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/c0.0.400.209a/61958225_314039152855808_7034759391186255872_n.jpg?_nc_cat=102&amp;_nc_eui2=AeGvmHtXHe5Z4p29yTDBwebfkY2-JSkiIq_-fTcgySrermT9nyMN_9CSEetQ6uk51sVC5qlHyQ_eu5eBZpvQ3V3gIpXfBmrfadQwYkoWBS5NtA&amp;_nc_ht=scontent-hkg3-1.xx&amp;oh=8d784f621a6f866554ef3055316ea9e4&amp;oe=5D897F5F"-->
    <!--                width="280" height="146" alt="" />-->
    <!--              </td>-->
    <!--            </tr>-->
    <!--            <tr>-->
    <!--              <td style="font-size:14px;font-weight:bold;padding:8px 8px 0px 8px;text-align:center;">TinishoVIP—Thành-->
    <!--                viên nền tảng thương mại điện tử xã hội-->
    <!--              </td>-->
    <!--            </tr>-->
    <!--            <tr>-->
    <!--              <td style="color:#90949c;font-size:12px;font-weight:normal;text-align:center;">封闭小组 · 2 位成员</td>-->
    <!--            </tr>-->
    <!--            <tr>-->
    <!--              <td style="padding:8px 12px 12px 12px;">-->
    <!--                <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;">-->
    <!--                  <tr>-->
    <!--                    <td style="background-color:#4267b2;border-radius:3px;text-align:center;"><a-->
    <!--                        style="color:#3b5998;text-decoration:none;cursor:pointer;width:100%;" href=" " target="_blank"-->
    <!--                        rel="noopener">-->
    <!--                      <table border="0" cellspacing="0" cellpadding="3" align="center"-->
    <!--                             style="border-collapse:collapse;">-->
    <!--                        <tr>-->
    <!--                          <td style="border-bottom:3px solid #4267b2;border-top:3px solid #4267b2;color:#FFF;font-family:Helvetica, Arial, sans-serif;font-size:12px;font-weight:bold;">-->
    <!--                            加入小组-->
    <!--                          </td>-->
    <!--                        </tr>-->
    <!--                      </table>-->
    <!--                    </a>-->
    <!--                    </td>-->
    <!--                  </tr>-->
    <!--                </table>-->
    <!--              </td>-->
    <!--            </tr>-->
    <!--          </table>-->
    <!--        </td>-->
    <!--      </tr>-->
    <!--      <tr style="">-->
    <!--        <td height="28" style="line-height:28px;">&nbsp;</td>-->
    <!--      </tr>-->
    <!--    </table>-->

    <van-icon name="chat" info="9"/>
    <van-icon name="chat" info="99+"/>
    <newIcon name="chat" info="99+"></newIcon>
  </div>
</template>
<script>
  import {Icon} from 'vant';

  console.log(Icon)

  export default {
    components: {
      [Icon.name]: Icon,
      newIcon:Icon,
    }
  }
</script>
<style lang=scss scoped>
  .about {
    padding: 15px;
  }
</style>
