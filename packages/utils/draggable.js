export default {
  name: "DraggableMixin",
  props: {
    draggable: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    draggable(val) {
      const es = this._dragEvents;
      val && es && es.onDraggable();
      !val && es && es.offDraggable();
    },
  },
  beforeDestroy() {
    this._dragEvents && this._dragEvents.offDraggable();
  },
  methods: {
    useDraggable(targetEl, dragEl) {
      let transform = { offsetX: 0, offsetY: 0 };

      const onMousedown = (e) => {
        const downX = e.clientX;
        const downY = e.clientY;
        const { offsetX, offsetY } = transform;

        const targetRect = targetEl.getBoundingClientRect();
        const targetLeft = targetRect.left;
        const targetTop = targetRect.top;
        const targetWidth = targetRect.width;
        const targetHeight = targetRect.height;

        const clientWidth = document.documentElement.clientWidth;
        const clientHeight = document.documentElement.clientHeight;

        const minLeft = -targetLeft + offsetX;
        const minTop = -targetTop + offsetY;
        const maxLeft = clientWidth - targetLeft - targetWidth + offsetX;
        const maxTop = clientHeight - targetTop - targetHeight + offsetY;

        const onMousemove = (e) => {
          const moveX = Math.min(
            Math.max(offsetX + e.clientX - downX, minLeft),
            maxLeft
          );
          const moveY = Math.min(
            Math.max(offsetY + e.clientY - downY, minTop),
            maxTop
          );

          transform = {
            offsetX: moveX,
            offsetY: moveY,
          };
          targetEl.style.transform = `translate(${moveX}px, ${moveY}px)`;
        };

        const onMouseup = () => {
          document.removeEventListener("mousemove", onMousemove);
          document.removeEventListener("mouseup", onMouseup);
        };

        document.addEventListener("mousemove", onMousemove);
        document.addEventListener("mouseup", onMouseup);
      };

      let cursor;
      let userSelect;
      const onDraggable = () => {
        if (dragEl && targetEl) {
          cursor = getComputedStyle(dragEl).cursor;
          userSelect = getComputedStyle(dragEl).userSelect;
          dragEl.style.cursor = "move";
          dragEl.style.userSelect = "none";
          dragEl.addEventListener("mousedown", onMousedown);
        }
      };
      if (this.draggable) onDraggable();

      const offDraggable = () => {
        if (dragEl && targetEl) {
          dragEl.style.cursor = cursor || (cursor = "auto");
          dragEl.style.userSelect = userSelect || (userSelect = "auto");
          dragEl.removeEventListener("mousedown", onMousedown);
        }
      };
      this._dragEvents = { onDraggable, offDraggable };
      return this._dragEvents;
    },
  },
};
