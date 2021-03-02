const $svg = document.querySelector('svg.ui-query-image');
const $range = document.querySelector('input[type="range"].ui-query-steps');
const steps_$paths = [
    [document.querySelector('#ad'), document.querySelector('#aJ')],
    [document.querySelector('#ah'), document.querySelector('#aM'), document.querySelector('#al'), document.querySelector('#aK')],
    [document.querySelector('#an'), document.querySelector('#aL')],
];

const render_step = step_string => {
    const step = parseInt(step_string);
    steps_$paths.forEach((group, idx) => {
        group.forEach($path => {
            if (idx === step) {
                $path.classList.remove('transparent');
            } else {
                $path.classList.add('transparent');
            }
        })
    });
};

$range.addEventListener('input', e => {
    render_step(e.target.value);
});
render_step($range.value);