import { createLocalVue, mount } from '@vue/test-utils';
import Pagination from '@/components/pagination/Pagination.vue';
import Vuetify from 'vuetify';

const localVue = createLocalVue();

describe('Pagination.vue', () => {
  let wrapper;

  beforeEach(() => {
    const vuetify = new Vuetify();

    wrapper = mount(Pagination, {
      localVue,
      vuetify,
      propsData: { page: 1, pageCount: 3 },
    });
  });

  it('should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders page numbers correctly', () => {
    expect(wrapper.findAll('[data-test="btn-page"]')).toHaveLength(3);
  });

  it('should emit an event when an active button is clicked', () => {
    const event = jest.fn();
    const button = wrapper.find('[data-test="btn-next"]');
    wrapper.vm.$on('update:page', event);

    button.trigger('click');
    expect(event).toHaveBeenCalledTimes(1);
  });

  it('should not emit an event when an disabled button is clicked', () => {
    const event = jest.fn();
    const button = wrapper.find('[data-test="btn-first"]');
    wrapper.vm.$on('update:page', event);

    button.trigger('click');
    expect(event).toHaveBeenCalledTimes(0);
  });
});
