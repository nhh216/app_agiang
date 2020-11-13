<template>
  <div class="container">
    <div class="d-flex flex-row justify-start">
      <h2>Phân tích rủi ro</h2>
    </div>
    <div class="d-flex flex-column justify-start">
      <div >
        <div class="d-flex flex-row justify-center">
          <div class="block-cal--kha_nang pa-5">
            <h3>Xác định khả năng</h3>
            <div class="d-flex flex-row justify-start">
              <div  class="pa-1">
                <h5>Xác định khả năng</h5>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                    <tr>
                      <th class="text-left">
                        Skill level
                      </th>
                      <th class="text-left">
                        Motive
                      </th>
                      <th class="text-left">
                        Opportunity
                      </th>
                      <th class="text-left">
                        Size
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td><v-text-field/></td>
                      <td><v-text-field/></td>
                      <td><v-text-field/></td>
                      <td><v-text-field/></td>
                    </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </div>
              <div class="pa-2 ml-2">
                <h5>Xác định khả năng</h5>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                    <tr>
                      <th class="text-left">
                        Skill level
                      </th>
                      <th class="text-left">
                        Motive
                      </th>
                      <th class="text-left">
                        Opportunity
                      </th>
                      <th class="text-left">
                        Size
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td><v-text-field/></td>
                      <td><v-text-field/></td>
                      <td><v-text-field/></td>
                      <td><v-text-field/></td>
                    </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </div>
            </div>
            <div class="d-flex flex-row justify-start mt-5">
              <div>
                <v-btn color="primary">Tính toán</v-btn>
              </div>
              <div class="ml-12 mt-2">
                <b>Kết quả</b> : 123
              </div>
            </div>
          </div>
        </div>
      </div>
      <div >
        <div class="d-flex flex-row justify-center">
          <div class="block-cal--kha_nang pa-5">
            <h3>Xác định các tác động</h3>
            <div class="d-flex flex-row justify-start">
              <div  class="pa-1">
                <h5>Xác định các tác động</h5>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                    <tr>
                      <th class="text-left">
                        Skill level
                      </th>
                      <th class="text-left">
                        Motive
                      </th>
                      <th class="text-left">
                        Opportunity
                      </th>
                      <th class="text-left">
                        Size
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td><v-text-field/></td>
                      <td><v-text-field/></td>
                      <td><v-text-field/></td>
                      <td><v-text-field/></td>
                    </tr>
                    </tbody>
                  </template>
                </v-simple-table>
                <v-text-field label="Trọng số" style="width: 100px" class="mt-5"/>
              </div>
              <div  class="pa-2 ml-1">
                <h5>Xác định các tác động</h5>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                    <tr>
                      <th class="text-left">
                        Skill level
                      </th>
                      <th class="text-left">
                        Motive
                      </th>
                      <th class="text-left">
                        Opportunity
                      </th>
                      <th class="text-left">
                        Size
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td><v-text-field/></td>
                      <td><v-text-field/></td>
                      <td><v-text-field/></td>
                      <td><v-text-field/></td>
                    </tr>
                    </tbody>
                  </template>
                </v-simple-table>
                <v-text-field label="Trọng số" style="width: 100px" class="mt-5"/>
              </div>
            </div>
            <div class="d-flex flex-row justify-start">
              <div>
                <v-btn color="primary">Tính toán</v-btn>
              </div>
              <div class="ml-12 mt-2">
                <b>Kết quả</b> : 123
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
table {
  border-collapse: collapse;
}
::v-deep th {
  border: 1px solid;
}
::v-deep td {
  border: 1px solid;
}

.block-cal--kha_nang {
  width: 90%;
  border: 1px solid;
  border-radius: 10px;
  margin-top: 50px;
  padding: 10px;
}
</style>
<script>
export default {
  name: 'Step2',
  data: () => {
    return {}
  },
  mounted() {
    console.log(123123)
  }
}
</script>
