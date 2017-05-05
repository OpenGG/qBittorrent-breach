<template>
  <div class="test">
    <div>
      Server address: {{server}}
    </div>
    <div>Cases({{cases.length}}):
      <span class="">{{pendings}}(pending)</span>,
      <span class="case-positive">{{positives}}(positive)</span>,
      <span class="case-negative">{{negatives}}(negative)</span>.
    </div>
    <el-table :data="cases"
              :row-class-name="tableRowClassName">
      <!--<el-table-column prop="type"
                       label="type"
                       width="80" />-->
      <el-table-column label="execute"
                       width="120">
        <template scope="scope">
          <el-button :type="scope.row.state === 'positive' ? 'danger' : ''"
                     size="small"
                     @click="execute(scope.row)">
            execute
          </el-button>
        </template>
      </el-table-column>
      <el-table-column label="state"
                       prop="state"
                       width="120" />
      <el-table-column prop="command"
                       label="command"
                       min-width="300" />
    </el-table>
  </div>
</template>

<script>
import server from './lib/server';
import msgboxMsg from './lib/message-box/message';
import msgboxOpts from './lib/message-box/option';
import Cases from './cases';

const inputPlaceholder = 'http://localhost:8080';

export default {
  name: 'app',
  data() {
    return {
      cases: Cases(),
      server: inputPlaceholder,
    };
  },
  computed: {
    pendings() {
      return this.cases
        .filter(
        ({
          state,
        }) => state === 'pending',
      ).length;
    },
    positives() {
      return this.cases
        .filter(
        ({
          state,
        }) => state === 'positive',
      ).length;
    },
    negatives() {
      return this.cases
        .filter(
        ({
          state,
        }) => state === 'negative',
      ).length;
    },
  },
  async mounted() {
    const addr = await this.askServerAddress();
    this.server = addr;
    server.set(addr);
  },
  methods: {
    msgboxMsg,
    tableRowClassName(row) {
      return `case-${row.state}`;
    },
    async askServerAddress() {
      try {
        const validate = str =>
          /^https?:\/\/\S+$/.test(str);
        const {
          value,
        } = await this.$prompt(
            this.msgboxMsg(
              'Your server address please?',
            ),
            msgboxOpts({
              // message: ,
              showInput: true,
              title: 'server address',
              inputValidator: str =>
                !str || validate(str),
              inputPlaceholder,
              inputErrorMessage: 'Invalid url',
            }),
          );
        return value || inputPlaceholder;
      } catch (e) {
        console.error(e);
        return this.askServerAddress();
      }
    },
    async execute(item) {
      try {
        await this.$confirm(
          this.msgboxMsg(item.prepare),
          msgboxOpts({
            title: item.desc,
            confirmButtonText: 'I\'m prepared',
            showClose: true,
          }),
        );

        this.$set(
          item,
          'state',
          'executing',
        );

        await item.test();

        let breached = false;
        try {
          await this.$confirm(
            this.msgboxMsg(
              item.confirm,
              'If yes, click "It\'s breached!", if not, click "It\'s fine."',
            ),
            msgboxOpts({
              title: item.desc,
              confirmButtonText: 'It\'s breached!',
              showCancelButton: true,
              cancelButtonText: 'It\'s fine.',
            }),
          );
          breached = true;
        } catch (e) {
          if (e === 'cancel') {
            breached = false;
          } else {
            throw e;
          }
        }
        this.$set(
          item,
          'state',
          breached ? 'positive' : 'negative',
        );
      } catch (e) {
        this.$set(
          item,
          'state',
          'init',
        );
        console.error(e);
      }
    },
  },
};
</script>

<style scoped lang="stylus">
.test
  margin: 10px 0
  padding: 10px
  border: 1px solid #ccc

</style>

<style lang="stylus">

.test

  .case-positive
    background: #F7BA2A

  .case-negative
    background: #c9e5f5
</style>
