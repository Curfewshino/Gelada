<script>
// @ts-nocheck
    export function checkname(e){
        if(e.length>=20){
            e.length = 17;
            return e + '...';
        }
        else{return e;}
    }
</script>

