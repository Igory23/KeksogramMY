const filters = document.querySelector('.img-filters');

const getEventsListenerFilter = (sortDiscussed, sortRandom, sortDefault) => {

    filters.addEventListener('click', (evt) => {
        if (evt.target.nodeName === 'BUTTON') {

            document.querySelector('.img-filters__button--active')
                .classList.remove('img-filters__button--active');
            evt.target.classList.add('img-filters__button--active');
            console.log(evt.target.id)

            switch (evt.target.id) {

                case 'filter-discussed':
                    document.querySelectorAll('.picture').forEach(value => value.remove());
                    sortDiscussed();
                    break;

                case 'filter-random':
                    document.querySelectorAll('.picture').forEach(value => value.remove());
                    sortRandom();
                    break;

                case 'filter-default':
                    document.querySelectorAll('.picture').forEach(value => value.remove());
                    sortDefault();
                    break;

            }
        }
    });
}

export { getEventsListenerFilter }
