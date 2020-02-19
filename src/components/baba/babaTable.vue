<template>
    <v-data-table
        dark
        :headers="headers"
        :items="desserts"
        class="elevation-1"
    >
        <template v-slot:item.calories="{ item }">
            <v-chip 
                v-for="i in item.calories" 
                v-bind:key="i"
                :color="getColor(i)" 
                dark
            >{{ i }}
            </v-chip>
    </template>
</v-data-table>
</template>

<script>

  export default {
    data () {
      return {
        headers: [
          {
            text: '순위',
            align: 'left',
            sortable: true,
            value: 'name',
          },
          { text: '속성', value: 'calories' },
          { text: '홈 보석', value: 'fat'},
          { text: '보조 옵션', value: 'carbs' },
          { text: '칼데산', value: 'protein' },
          { text: '비율 (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: '1',
            calories: {
                a: '힘',
                b: '활력',
                c: '방어도'
            },
            fat: '다이아몬드 보석',
            carbs: '냉기저항',
            protein: '지능',
            iron: '90%',
          },
        ],
      }
    },
    methods: {
      getColor (calories) {
        if (calories == '힘') return 'red'
        else if (calories == '활력') return 'purple'
        else return 'green'
      },
    },
  }
</script>
