const filters = document.querySelector('.img-filters');

const getEventsListenerFilter = (sortDiscussed, sortRandom, sortDefault) => {

    filters.addEventListener('click', (evt) => {
        if (evt.target.nodeName === 'BUTTON') {
            
            document.querySelector('.img-filters__button--active')
                .classList.remove('img-filters__button--active');
            evt.target.classList.add('img-filters__button--active');
            console.log(evt.target.id)

            if (evt.target.id == 'filter-discussed') {
                document.querySelectorAll('.picture').forEach(value => value.remove());
                sortDiscussed()
            }

            if (evt.target.id == 'filter-random') {
                document.querySelectorAll('.picture').forEach(value => value.remove());
                sortRandom()
            }

            if (evt.target.id == 'filter-default') {
                document.querySelectorAll('.picture').forEach(value => value.remove());
                sortDefault()
            }
        }
    });
}

export { getEventsListenerFilter }
