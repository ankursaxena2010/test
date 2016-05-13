/**This file contains all the Logger threshold settings
*
* tds.util.Log.TRACE
* tds.util.Log.DEBUG
* tds.util.Log.INFO
* tds.util.Log.WARNING
* tds.util.Log.ERROR
*
**/
tds.util.Log.setDefaultThreshold(tds.util.Log.ERROR);
tds.util.Log.setThreshold("tds.*",tds.util.Log.ERROR);
tds.util.Log.setThreshold("tds.ui.NPaginatedScroller",tds.util.Log.ERROR);
tds.util.Log.setThreshold("tds.ui.NScroller",tds.util.Log.ERROR);
tds.util.Log.setThreshold("ZyngaScroller", tds.util.Log.ERROR);
tds.util.Log.setThreshold("tds.util.Environmental", tds.util.Log.ERROR);

//CORE
tds.util.Log.setThreshold("tds.core.Object", tds.util.Log.ERROR);

//UI
tds.util.Log.setThreshold("tds.ui.AbstractView", tds.util.Log.ERROR);
tds.util.Log.setThreshold("tds.ui.TableView",tds.util.Log.ERROR);

//DIALOG
tds.util.Log.setThreshold("tds.ui.dialog.Dialog", tds.util.Log.ERROR);


//PAGE
tds.util.Log.setThreshold("tds.ui.page.AbstractPageDelegate",tds.util.Log.ERROR);
tds.util.Log.setThreshold("tds.ui.page.PageFlatDelegate",tds.util.Log.ERROR);
tds.util.Log.setThreshold("tds.ui.page.PageSliderDelegate",tds.util.Log.ERROR);
tds.util.Log.setThreshold("tds.ui.page.PageView",tds.util.Log.ERROR);

//FORM
tds.util.Log.setThreshold("tds.ui.form.AbstractViewProvider", tds.util.Log.ERROR);
tds.util.Log.setThreshold("tds.ui.form.ViewProvider", tds.util.Log.ERROR);


//FORM CONTROLS
tds.util.Log.setThreshold("tds.ui.form.InputView", tds.util.Log.ERROR);