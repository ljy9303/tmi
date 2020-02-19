<template>
    <v-container>
        <v-divider></v-divider>
        <v-row
            align="center"
            cols="12"
            style="height: 100px;"
            >
            <v-col md="1" style="heigth:20px; width:50px; padding-right:0" align="center" >
                <v-card hover width="80%" height="80px" color="#000000">
                <router-link to="/baba/">
                <a href="#">
                    <v-img src="../assets/image/baba.png"
                        alt="야만용사"
                        contain
                        width="70px">
                    </v-img>
                </a>
                </router-link>
                </v-card>
            </v-col>
            <v-col md="1" style="heigth:20px; width:50px; padding-right:0" align="center" >
            <v-card hover width="80%" height="80px" color="#000000">
                <a href="#">
                    <v-img src="../assets/image/monk.png"
                        contain
                        alt="수도사"
                        width="70px">
                    </v-img>
                </a>
                </v-card>
            </v-col>
            <v-col md="1" style="heigth:20px; width:50px; padding-right:0" align="center" >
            <v-card hover width="80%" height="80px" color="#000000">
                <a href="#">
                    <v-img src="../assets/image/demon.png"
                        contain
                        alt="악마샤낭꾼"
                        width="70px">
                    </v-img>
                </a>
                </v-card>
            </v-col>
            <v-col md="1" style="heigth:20px; width:50px; padding-right:0" align="center" >
            <v-card hover width="80%" height="80px" color="#000000">
                <a href="#">
                    <v-img src="../assets/image/wizard.png"
                        contain
                        alt="마법사"
                        width="70px">
                    </v-img>
                </a>
                </v-card>
            </v-col>
            <v-col md="1" style="heigth:20px; width:50px; padding-right:0" align="center" >
            <v-card hover width="80%" height="80px" color="#000000">
                <a href="#">
                    <v-img src="../assets/image/witch.png"
                        contain
                        alt="부두술사"
                        width="70px">
                    </v-img>
                </a>
                </v-card>
            </v-col>
            <v-col md="1" style="heigth:20px; width:50px; padding-right:0" align="center" >
            <v-card hover width="80%" height="80px" color="#000000">
                <a href="#">
                    <v-img src="../assets/image/crusader.png"
                        contain
                        alt="성전사"
                        width="70px">
                    </v-img>
                </a>
                </v-card>
            </v-col>
            <v-col md="1" style="heigth:20px; width:50px; padding-right:0" align="center" >
            <v-card hover width="80%" height="80px" color="#000000">
                <a href="#">
                    <v-img src="../assets/image/necro.png"
                        contain
                        alt="강령술사"
                        width="70px">
                    </v-img>
                </a>
                </v-card>
            </v-col>
        </v-row>
    </v-container>  
</template>


<script>
  export default {
    name: 'landing-top',

    data: () => ({
      
    })
  }
</script>
<style scoped>
 a:link { color: red; text-decoration: none;}
 a:visited { color: black; text-decoration: none;}
 a:hover { color: blue; text-decoration: underline;}

</style>