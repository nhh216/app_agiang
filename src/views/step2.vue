<template>
  <div class="container">
    <div class="d-flex flex-row justify-start">
      <h2>Phân tích rủi ro</h2>
    </div>
    <div class="d-flex flex-column justify-start">
      <div>
        <div class="d-flex flex-row justify-center">
          <div class="block-cal--kha_nang pa-5">
            <h3>Xác định khả năng</h3>
            <div class="d-flex flex-row justify-start">
              <div  class="pa-1">
                <h5>Threat agent factors</h5>
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
                      <td><v-text-field v-model="skillLevel"/></td>
                      <td><v-text-field v-model="motive"/></td>
                      <td><v-text-field v-model="opportunity"/></td>
                      <td><v-text-field v-model="size"/></td>
                    </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </div>
              <div class="pa-2 ml-2">
                <h5>Vulnerability factors</h5>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                    <tr>
                      <th class="text-left">
                        Ease of discovery
                      </th>
                      <th class="text-left">
                        Ease of exploit
                      </th>
                      <th class="text-left">
                        Awareness
                      </th>
                      <th class="text-left">
                        Intrusion detection
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td><v-text-field v-model="easeOfDiscovery"/></td>
                      <td><v-text-field v-model="easeOfExploit"/></td>
                      <td><v-text-field v-model="awareness"/></td>
                      <td><v-text-field v-model="intrusionDetection"/></td>
                    </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </div>
            </div>
            <div class="d-flex flex-row justify-start mt-5">
              <div>
                <v-btn color="primary" @click="calcResultAgentFactory">Tính toán</v-btn>
              </div>
              <div class="ml-12 mt-2">
                <b>Kết quả</b> : {{ resultAgentFactory }}
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
                <h5>Technical Impact</h5>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                    <tr>
                      <th class="text-left">
                        Loss of confidentiality
                      </th>
                      <th class="text-left">
                        Loss of integrity
                      </th>
                      <th class="text-left">
                        Loss of availability
                      </th>
                      <th class="text-left">
                        Loss of accountability
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td><v-text-field v-model="confidentiality"/></td>
                      <td><v-text-field v-model="integrity"/></td>
                      <td><v-text-field v-model="availability"/></td>
                      <td><v-text-field v-model="accountability"/></td>
                    </tr>
                    </tbody>
                  </template>
                </v-simple-table>
                <div class="mt-10 ml-4">
                  <b>Kết quả</b> : {{  resultTechnicalImpact }}
                  <v-text-field label="Trọng số" v-model="weightTechnicalImpact" style="width: 100px" class="mt-5"/>
                </div>
              </div>
              <div  class="pa-2 ml-1">
                <h5>Business Impact</h5>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                    <tr>
                      <th class="text-left">
                        Financial damage
                      </th>
                      <th class="text-left">
                        Reputation damage
                      </th>
                      <th class="text-left">
                        Non-compliance
                      </th>
                      <th class="text-left">
                        Privacy violation
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td><v-text-field v-model="financialDamage"/></td>
                      <td><v-text-field v-model="reputationDamage"/></td>
                      <td><v-text-field v-model="nonCompliance"/></td>
                      <td><v-text-field v-model="privacyViolation"/></td>
                    </tr>
                    </tbody>
                  </template>
                </v-simple-table>
                <div class="mt-10 ml-4">
                    <b>Kết quả</b> : {{  resultBusinessImpact }}
                    <v-text-field label="Trọng số" v-model="weightBusinessImpact" style="width: 100px" class="mt-5"/>
                </div>
              </div>
            </div>
            <div class="d-flex flex-row justify-start">
              <div>
                <v-btn color="primary" @click="OverallLikelihood">Tính toán</v-btn>
              </div>
              <div class="ml-12 mt-2">
                <b>Kết quả</b> : {{ resultOverallImpact }}
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
    return {
      skillLevel: null,
      motive: null,
      opportunity: null,
      size: null,
      easeOfDiscovery: null,
      easeOfExploit: null,
      awareness: null,
      intrusionDetection: null,
      resultAgentFactory: 0,
      confidentiality: null,
      integrity: null,
      availability: null,
      accountability: null,
      weightTechnicalImpact: null,
      financialDamage: null,
      reputationDamage: null,
      nonCompliance: null,
      privacyViolation: null,
      weightBusinessImpact: null,
      resultOverallImpact: 0,
    }
  },
  mounted() {

  },
  methods: {
    calcResultAgentFactory () {
      this.resultAgentFactory = (
          parseInt(this.skillLevel )+
          parseInt(this.motive) +
          parseInt(this.opportunity) +
          parseInt(this.size) +
          parseInt(this.easeOfDiscovery) +
          parseInt(this.easeOfExploit) +
          parseInt(this.awareness) +
          parseInt(this.intrusionDetection)) / 8
    },
    OverallLikelihood() {
     this.resultOverallImpact = ((
         parseFloat(this.resultTechnicalImpact)
         * parseFloat(this.weightTechnicalImpact)
         + parseFloat(this.resultBusinessImpact)
         * parseFloat(this.weightBusinessImpact )) / (parseFloat(this.weightBusinessImpact) + parseInt(this.weightTechnicalImpact)))
    }
  },
  computed: {
    resultBusinessImpact () {
      return ( parseInt(this.financialDamage) +
              parseInt(this.reputationDamage) +
              parseInt(this.nonCompliance) +
              parseInt(this.privacyViolation)) / 4
    },
    resultTechnicalImpact () {
      return ( parseInt(this.confidentiality) +
          parseInt(this.integrity) +
          parseInt(this.availability) +
          parseInt(this.accountability)) / 4
    }
  }
}
</script>
