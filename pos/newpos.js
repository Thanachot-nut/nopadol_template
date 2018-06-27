new Vue({
    el: '#app',
    data() {
        return {
            message: '12345679',
            datasearch: '',
            amountproduct: 1,
            foundproduct:[
                {
                    name:'Canon Eos 60DDDD',
                    amountproduct:1,
                    price:25000,
                }
            ],
            allproduct:[
                {
                    img: 'http://fs.lnwfile.com/_/fs/_raw/pk/53/yx.jpg',
                    name: 'HITACHI สว่าน',
                },
                {
                    img: 'http://fs.lnwfile.com/_/fs/_raw/kb/wo/es.jpg',
                    name: 'EUROXไข ',
                },
                {
                    img: 'http://fs.lnwfile.com/_/fs/_raw/cg/g0/fs.jpg',
                    name: 'กรรไกรตัด',
                },
                {
                    img: 'http://fs.lnwfile.com/_/fs/_raw/36/s7/rz.jpg',
                    name: 'ปืนฉีดน้ำ 7',
                },
                {
                    img: 'http://fs.lnwfile.com/_/fs/_raw/3d/it/20.jpg',
                    name: 'หัวฉีดรุ่นมา',
                },
                {
                    img: 'http://fs.lnwfile.com/_/fs/_raw/ts/el/i2.jpg',
                    name: 'ชุดโรลพร้อม',
                },
                {
                    img: 'http://fs.lnwfile.com/_/fs/_raw/uo/iv/ab.jpg',
                    name: 'ก๊อกจริงใจ ANA',
                },
                {
                    img: 'http://fs.lnwfile.com/_/fs/_raw/7k/41/y3.jpg',
                    name: ' HITACHI WM',
                },
                {
                    img: 'http://fs.lnwfile.com/_/fs/_raw/gi/3i/bc.jpg',
                    name: 'DOS SILVER ',
                },
                {
                    img: 'http://fs.lnwfile.com/_/fs/_raw/i5/h5/m8.jpg',
                    name: 'MITSUBISHI',
                },
                {
                    img: 'http://fs.lnwfile.com/_/fs/_raw/i3/na/pq.jpg',
                    name: 'ปั๊มน้ำอัตโนมัติ',
                },
                {
                    img: 'http://fs.lnwfile.com/_/fs/_raw/vk/ky/ax.jpg',
                    name: 'กระเบื้องหลังคา',
                },
                
                
            ],
            products: [
//                {
//                    price: 1,
//                    name: 'Deekshfa Men..Deeksha Men.. Deek Men.. Deek',
//                    amount: '$5333f0.50',
//                    amount2: '$533f3330.50'
//                },
                ],
        }
    },
    methods: {
        addproducttocart() {
            this.products.push({
                price: this.foundproduct[0].amountproduct,
                name: this.foundproduct[0].name,
                amount: this.foundproduct[0].price,
                amount2: this.foundproduct[0].price * this.foundproduct[0].amountproduct
            })
           
            	
      var container = this.$el.querySelector("#containerx");
      container.scrollTop = container.scrollHeight;
    
            //            this.products.push()
        },
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
        cancelproduct(index) {
            swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this imaginary file!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((Delete) => {
                    if (Delete) {
                        swal("Product has been deleted! " + index, {
                        icon: "success",
                        });
                      this.products.splice(index, 1);
                    } else {
                        swal("Your imaginary file is safe!");
                    }
                });
        }
    },
    mounted() {
        document.getElementById("textsearchproduct").focus();

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