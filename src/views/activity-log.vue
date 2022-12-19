<template>
  <div class="activity-log-view">
    <app-header :title="title"></app-header>
    <div class="card log-item" v-for="item in log" :key="item.key">
      <div class="card-header d-flex justify-content-between">
        <span class="title">{{ item.title }}</span>
        <small class="timestamp">{{ getTime(item.timestamp) }}</small>
      </div>
      <div class="card-body d-flex justify-content-left">
        <!-- <h5 class="card-title">Special title treatment</h5> -->
        <p class="card-text" v-html="fixText(item.text)"></p>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import moment from 'moment';
import { getterTypes } from '../store/getter-types';
import { storeAccess } from '../store/store-access';
import { Header as AppHeader } from '@walts81/vue-common-components';

export default {
  components: { AppHeader },
  setup() {
    const log = computed(
      () => storeAccess.store.getters[getterTypes.rootApp.activityLog]
    );
    const fixText = (val: string) => {
      return val.replace(/\sjust\s/g, ' ');
    };
    const getTime = (timestamp: string) => {
      const ts = moment(timestamp);
      const now = moment();
      const diff = moment.duration(now.diff(ts));
      const min = Math.round(diff.as('minutes'));
      if (min < 1) {
        const sec = Math.round(diff.as('seconds'));
        const secondOrSeconds = sec === 1 ? 'second' : 'seconds';
        return `${sec} ${secondOrSeconds} ago`;
      }
      if (min >= 60) {
        const hours = Math.round(diff.as('hours'));
        if (hours > 24) return ts.format('llll');
        const hourOrHours = hours === 1 ? 'hour' : 'hours';
        return `${hours} ${hourOrHours} ago`;
      }
      const minuteOrMinutes = min === 1 ? 'minute' : 'minutes';
      return `${min} ${minuteOrMinutes} ago`;
    };
    const title = computed(
      () => storeAccess.store.getters[getterTypes.rootApp.title]
    );
    return { log, fixText, getTime, title };
  },
};
</script>

<style lang="scss">
.activity-log-view {
  .log-item {
    margin-bottom: 1.5rem;
    .title {
      opacity: 0.7;
    }
    .card-body {
      opacity: 0.9;
    }
    small.timestamp {
      font-style: italic;
      font-size: 0.75rem;
      opacity: 0.8;
    }
    p.card-text {
      text-indent: 0;
      text-align: left;
    }
  }
}
</style>
