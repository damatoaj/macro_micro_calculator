export function printTable(id:string) {
    const prtContent : HTMLElement = document.getElementById(id)!;
    const WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0')!;
    WinPrint?.document.write(prtContent.innerHTML);
    WinPrint?.document.close();
    WinPrint?.focus();
    WinPrint?.print();
    WinPrint?.close();
}

