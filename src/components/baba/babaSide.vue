<template>
 <v-card>
     <div class="white--text" style="background-color: rgba(0, 0, 0, 0.87)">
         야만용사
         </div>
    <v-sheet elevation="6">
    <v-tabs
      v-model="tab"
      background-color="dark"
      dark
      next-icon="mdi-arrow-right-bold-box-outline"
      prev-icon="mdi-arrow-left-bold-box-outline"
      show-arrows
    >
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tab
        v-for="item in items"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item.tab"
      >
        <v-card flat>
                <v-data-table
                    :headers="headers"
                    :items="item.content"
                    @click:row="handleClick"
                    class="cursors_"

                >
                <!--
                <template slot="item.content" slot-scope="props">
                    <tr @click="showAlert(props.item)">
                        <td class="text-xs-right">{{ props.item.rank }}</td>
                        <td class="text-xs-right">{{ props.item.name }}</td>
                        <td class="text-xs-right">{{ props.item.per }}</td>
                    </tr>
                </template>
                -->
                </v-data-table>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-sheet>
 </v-card>
</template>

<script>
var mainHand =  
[
    {
        rank: '1',
        name: '무자비',
        per: '92.1%'
    },
    {
        rank: '2',
        name: '산키스의 불타는 도끼',
        per: '87.98%'
    },
    {
        rank: '3',
        name: '부족의 칼',
        per: '0.7%'
    },
]
var offHand = 
[
    {
        rank: '1',
        name: '협만 절단기',
        per: '97.1%'
    },
    {
        rank: '2',
        name: '꼬마 도적',
        per: '90.01%'
    },
    {
        rank: '3',
        name: '모략가',
        per: '0.7%'
    },
]
var head =
 [
    {
        rank: '1',
        name: '레오릭의 왕관',
        per: '98.5%'
    },
    {
        rank: '2',
        name: '래코르의 의지',
        per: '79.54%'
    },
    {
        rank: '3',
        name: '황야의 투구',
        per: '10.3%'
    },
]
var shoulder = 
[
    {
        rank: '1',
        name: '보른의 면죄',
        per: '91.5%'
    },
    {
        rank: '2',
        name: '불사의 날개짓',
        per: '37.3%'
    },
    {
        rank: '3',
        name: '절망의 근사한 견갑',
        per: '4.7%'
    },
]
var torso = 
[
    {
        rank: '1',
        name: '보른의 강철 심장',
        per: '88.11%'
    },
    {
        rank: '2',
        name: '인나의 광대한 영역',
        per: '77.1%'
    },
    {
        rank: '3',
        name: '불멸왕의 영원한 통치',
        per: '1.3%'
    },
]
var waist = 
[
    {
        rank: '1',
        name: '수호자의 모면',
        per: '94.5%'
    },
    {
        rank: '2',
        name: '악마의 보복',
        per: '88.3%'
    },
    {
        rank: '3',
        name: '수호자의 반감',
        per: '7.3%'
    },
]
var hands = 
[
    {
        rank: '1',
        name: '탈라샤의 손아귀',
        per: '95.55%'
    },
    {
        rank: '2',
        name: '불멸왕의 무쇠',
        per: '87.3%'
    },
    {
        rank: '3',
        name: '나탈랴의 손길',
        per: '0.3%'
    },
]

var bracers = 
[
    {
        rank: '1',
        name: '크림슨 선장의 공단 장식띠',
        per: '35.55%'
    },
    {
        rank: '2',
        name: '수호자의 칼걸이',
        per: '23.3%'
    },
    {
        rank: '3',
        name: '탈 라샤의 버팀대',
        per: '1.5%'
    },
]

var legs = 
[
    {
        rank: '1',
        name: '케인의 장포',
        per: '66.55%'
    },
    {
        rank: '2',
        name: '아시아라의 걸음걸이',
        per: '50.3%'
    },
    {
        rank: '3',
        name: '탈라샤의 발걸음',
        per: '0.3%'
    },
]
var feet = 
[
    {
        rank: '1',
        name: '습격자의 발 보호대',
        per: '80.55%'
    },
    {
        rank: '2',
        name: '정의의 발 보호구',
        per: '87.3%'
    },
    {
        rank: '3',
        name: '여덟 악마 장화',
        per: '6.3%'
    },
]

var finger =
[
    {
        rank: '1',
        name: '지옥불 목걸이',
        per: '87.15%'
    },
    {
        rank: '2',
        name: '꼬맹이 목걸이',
        per: '23.3%'
    },
    {
        rank: '3',
        name: '칼란의 지혜',
        per: '2.3%'
    },
]

  export default {
    data () {
      return {
        tab: null,
        items: [
          { tab: '무기', content: mainHand  },
          { tab: '보조', content: offHand   },
          { tab: '투구', content: head      },
          { tab: '어깨', content: shoulder  },
          { tab: '몸통', content: torso     },
          { tab: '손목', content: waist     },
          { tab: '장갑', content: hands     },
          { tab: '허리', content: bracers   },
          { tab: '다리', content: legs      },
          { tab: '신발', content: feet      },
          { tab: '장신구', content: finger  },
        ],
        headers: [
          {
            text: '순위',
            align: 'left',
            sortable: false,
            value: 'rank',
          },
          { text: '아이템', value: 'name', sortable: false },
          { text: '비율 (%)', value: 'per', sortable: false }
        ],
      }
    },
    methods: {
        handleClick(value) {
            this.highlightClickedRow(value);
            console.log(value)
        },
         highlightClickedRow(value) {
            let tr = event.target.parentNode;
            tr.classList.add('highlight');
            console.log(value)
        },
        
    }
  }
</script>


<style scoped>
.cursors_ {
        cursor: pointer
	}
tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, .05);
}
</style>
