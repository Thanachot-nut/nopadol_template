new Vue({
    el: '#app',
    data() {
        return {
            message: '12345679',
            datasearch: ''
        }
    },
    methods: {
        searchbarcodeproduct() {
            if (this.datasearch == '') {
                document.getElementById('productall').style.display = 'block';
                document.getElementById('productall').style.opacity = '1';

                document.getElementById('productfound').style.display = 'none';
                document.getElementById('productfound').style.opacity = '0';
            } else {
                document.getElementById('productfound').style.display = 'block';
                document.getElementById('productfound').style.opacity = '1';
                document.getElementById('productall').style.display = 'none';
                document.getElementById('productall').style.opacity = '0';
            }
        },
        cancelproduct() {
             swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
        }
    },
    mounted() {
       
        //        if (this.datasearch == '') {
        //            document.getElementById('productfound').style.display = 'none';
        //            document.getElementById('productfound').style.opacity = '0';
        //        } else {
        //            document.getElementById('productall').style.display = 'block';
        //            document.getElementById('productall').style.opacity = '1';
        //        }
        document.title = 'POS'
    }
})
