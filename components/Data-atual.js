


function Data() {

    function day() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        // today = dd + '/' + mm + '/' + yyyy;
        day = dd;

        return day;
    }

    function mes() {
        var today = new Date();
        var mm = today.getMonth() + 1;
        mes = mm;

        switch (mm = today.getMonth() + 1) {

            case 1:
                mes = 'JAN';
                break;
            case 2:
                mes = 'FEV';
                break;
            case 3:
                mes = 'MAR';
                break;
            case 4:
                mes = 'ABR';
                break;
            case 5:
                mes = 'MAI';
                break;
            case 6:
                mes = 'JUN';
                break;
            case 7:
                mes = 'JUL';
                break;
            case 8:
                mes = 'AGO';
                break;
            case 9:
                mes = 'SET';
                break;
            case 10:
                mes = 'OUT';
                break;
            case 11:
                mes = 'NOM';
                break;
            case 12:
                mes = 'DEZ';
                break;
            default:
                mes = 'não found';
                break;
        }


        return mes;
    }

    return (
        <>
            <div className='w-14 border-2 shadow-md rounded-xl justify-center items-center'>
                <div className=''>
                    <div className='text-center text-2xl border-b font-extrabold text-white bg-transparent'>{day()}</div>
                    <div className='text-center text-sm font-semibold text-white'>{mes()}</div>
                </div>
            </div>

        </>
    )
}

export default Data