<template>
 <v-card>
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
            items-per-page=5
            hide-default-footer="true"
            ></v-data-table>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-sheet>
 </v-card>
</template>

<script>
var baba =  
[
    {
        rank: '1',
        name: '래코르의 선망',
        per: '94.1%'
    },
    {
        rank: '2',
        name: '황야의 진노',
        per: '87.98%'
    },
    {
        rank: '3',
        name: '불멸왕의 부름',
        per: '0.7%'
    },
]
var monk = 
[
    {
        rank: '1',
        name: '정의 질주',
        per: '97.1%'
    },
    {
        rank: '2',
        name: '운전 수도',
        per: '90.01%'
    },
    {
        rank: '3',
        name: '악몽 반달',
        per: '0.7%'
    },
]
var crusader =
 [
    {
        rank: '1',
        name: '용기 공속 샷건',
        per: '98.5%'
    },
    {
        rank: '2',
        name: '용기 반격 샷건',
        per: '79.54%'
    },
    {
        rank: '3',
        name: '아크칸 규탄',
        per: '10.3%'
    },
]
var deamon = 
[
    {
        rank: '1',
        name: '부정 다발',
        per: '91.5%'
    },
    {
        rank: '2',
        name: '어둠 투검',
        per: '37.3%'
    },
    {
        rank: '3',
        name: '악몽 연발',
        per: '4.7%'
    },
]
var necro = 
[
    {
        rank: '1',
        name: '악몽의 유산',
        per: '88.11%'
    },
    {
        rank: '2',
        name: '역병 시체창',
        per: '77.1%'
    },
    {
        rank: '3',
        name: '이나리우스의 사신',
        per: '1.3%'
    },
]
var witch = 
[
    {
        rank: '1',
        name: '지옥니 덩치',
        per: '94.5%'
    },
    {
        rank: '2',
        name: '비취 혼령',
        per: '88.3%'
    },
    {
        rank: '3',
        name: '주니마사 망령',
        per: '7.3%'
    },
]
var wizard = 
[
    {
        rank: '1',
        name: '비르 찬토도',
        per: '95.55%'
    },
    {
        rank: '2',
        name: '탈 라샤',
        per: '87.3%'
    },
    {
        rank: '3',
        name: '악몽 마인 별약',
        per: '0.3%'
    },
]
  export default {
    data () {
      return {
        tab: null,
        items: [
          { tab: '야만', content: baba},
          { tab: '수도사', content: monk },
          { tab: '악사', content: deamon },
          { tab: '법사', content: wizard },
          { tab: '부두', content: witch },
          { tab: '성전사', content: crusader },
          { tab: '강령술사', content: necro }
        ],
        headers: [
          {
            text: '순위',
            align: 'left',
            sortable: false,
            value: 'rank',
          },
          { text: '셋트', value: 'name', sortable: false },
          { text: '비율 (%)', value: 'per', sortable: false }
        ],
      }
    },
  }
</script>