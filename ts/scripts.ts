declare var $: any;


class ColorChanger {
    public constructor(
        private _selector: string) { }


    public startChanging() {
        let $welcome = $(this._selector);
        setInterval(() => {
            $welcome.css('color', this.getRandomColor());
        }, 1000);
    }
    

    private getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
      }
}
  
