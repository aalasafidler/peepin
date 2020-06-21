// A component is a custom HTML element that will display a specified template with provided information when used.

const Comment = Vue.component('comment', {
 props: ['message', 'author', 'date'],
 template: '<div class="comment"><h3>{{ author }} says:</h3><p>{{ message }} by {{author}} at {{date}}.</p></div>'
});