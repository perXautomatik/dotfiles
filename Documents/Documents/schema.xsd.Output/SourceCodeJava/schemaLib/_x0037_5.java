package schemaLib;
 
/**********************************************************************************************
 * Copyright (c) 2001-2021 Liquid Technologies Limited. All rights reserved.
 * See www.liquid-technologies.com for product details.
 *
 * Please see products End User License Agreement for distribution permissions.
 *
 * WARNING: THIS FILE IS GENERATED
 * Changes made outside of ##HAND_CODED_BLOCK_START blocks will be overwritten
 *
 * Generation  :  by Liquid XML Data Binder 19.0.9.10834
 * Using Schema: C:/Users/chris/OneDrive/Dokument/schema.xsd
 **********************************************************************************************/
	
// <summary>
// This class represents the ComplexType _x0037_5
// </summary>
public class _x0037_5 extends com.liquid_technologies.ltxmllib19.XmlGeneratedClass {
	private static final long serialVersionUID = 13L;

	// <summary>
	// 	Constructor for _x0037_5
	// </summary>
	// <remarks>
	// The class is created with all the mandatory fields populated with the
	// default data. 
	// All Collection object are created.
	// However any 1-n relationships (these are represented as collections) are
	// empty. To comply with the schema these must be populated before the xml
	// obtained from ToXml is valid against the schema C:/Users/chris/OneDrive/Dokument/schema.xsd
	// </remarks>
	public _x0037_5() {
		setElementName("_x0037_5");
		init();
	}
	public _x0037_5(String elementName) {
		setElementName(elementName);
		init();
	}		

	// <summary>
	// 	Initializes the class
	// </summary>
	// <remarks>
	// This creates all the mandatory fields (populated with the default data) 
	// All Collection object are created.
	// However any 1-n relationships (these are represented as collections) are
	// empty. To comply with the schema these must be populated before the xml
	// obtained from ToXml is valid against the schema C:/Users/chris/OneDrive/Dokument/schema.xsd.
	// </remarks>
	@Override
	protected void init() {
		try {
			schemaLib.Registration.iRegistrationIndicator = 0; // causes registration to take place
			__x0037_7 = null;
			__x0037_8 = null;
			__x0037_9 = null;

			// ##HAND_CODED_BLOCK_START ID="Additional Inits"## DO NOT MODIFY ANYTHING OUTSIDE OF THESE TAGS
			// Add Additional initialization code here...
			// ##HAND_CODED_BLOCK_END ID="Additional Inits"## DO NOT MODIFY ANYTHING OUTSIDE OF THESE TAGS

			getClassAttributeInfo();
			getClassElementInfo();
		} catch (Exception ex) {
			// should never happen
			ex.printStackTrace();
			throw new InternalError();
		}
	}



	// <summary>
	// Allows the class to be copied
	// </summary>
	// <remarks>
	// Performs a 'deep copy' of all the data in the class (and its children)
	// </remarks>
	@Override
	public Object clone() throws CloneNotSupportedException {
		try {
			schemaLib._x0037_5 newObject = (schemaLib._x0037_5)super.clone();

			// clone, creates a bitwise copy of the class, so all the collections are the
			// same as the parents. Init will re-create our own collections, and classes, 
			// preventing objects being shared between the new an original objects
			newObject.init();
			newObject.__x0037_7 = null;
			if (__x0037_7 != null)
				newObject.__x0037_7 = (schemaLib._x0037_7)__x0037_7.clone();
			newObject.__x0037_8 = null;
			if (__x0037_8 != null)
				newObject.__x0037_8 = (schemaLib._x0037_8)__x0037_8.clone();
			newObject.__x0037_9 = null;
			if (__x0037_9 != null)
				newObject.__x0037_9 = (schemaLib._x0037_9A)__x0037_9.clone();
	
// ##HAND_CODED_BLOCK_START ID="Additional clone"## DO NOT MODIFY ANYTHING OUTSIDE OF THESE TAGS

// Add Additional clone code here...

// ##HAND_CODED_BLOCK_END ID="Additional clone"## DO NOT MODIFY ANYTHING OUTSIDE OF THESE TAGS

			return newObject;
		} catch (CloneNotSupportedException e) {
			// should never happen
			e.printStackTrace();
			throw new InternalError();
		}
	}

	@Override
	public String getTargetNamespace() {
		return "";
	}

	// <summary>
	// Represents an optional Element in the XML document
	// </summary>
	// <remarks>
	// This property is represented as an Element in the XML.
	// It is optional, initially it is null.

	// </remarks>
	public schemaLib._x0037_7 get_x0037_7() {
		return __x0037_7;  
	}
	public void set_x0037_7(schemaLib._x0037_7 value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0037_7 = null;
		else {
			setElementName(value.getBase(), "_x0037_7");
			__x0037_7 = value; 
		}
	}
	protected schemaLib._x0037_7 __x0037_7;

	// <summary>
	// Represents an optional Element in the XML document
	// </summary>
	// <remarks>
	// This property is represented as an Element in the XML.
	// It is optional, initially it is null.

	// </remarks>
	public schemaLib._x0037_8 get_x0037_8() {
		return __x0037_8;  
	}
	public void set_x0037_8(schemaLib._x0037_8 value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0037_8 = null;
		else {
			setElementName(value.getBase(), "_x0037_8");
			__x0037_8 = value; 
		}
	}
	protected schemaLib._x0037_8 __x0037_8;

	// <summary>
	// Represents an optional Element in the XML document
	// </summary>
	// <remarks>
	// This property is represented as an Element in the XML.
	// It is optional, initially it is null.

	// </remarks>
	public schemaLib._x0037_9A get_x0037_9() {
		return __x0037_9;  
	}
	public void set_x0037_9(schemaLib._x0037_9A value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0037_9 = null;
		else {
			setElementName(value.getBase(), "_x0037_9");
			__x0037_9 = value; 
		}
	}
	protected schemaLib._x0037_9A __x0037_9;

	@Override
	public String getNamespace() {
		return "";
	}	

	@Override
	public com.liquid_technologies.ltxmllib19.XmlObjectBase getBase() {
		return this;
	}
	protected void onEvent(com.liquid_technologies.ltxmllib19.XmlObjectBase msgSource, int msgType, Object data) {
		if (msgType == CollectionChangeEvent) {
		}
	}

	private static com.liquid_technologies.ltxmllib19.ParentElementInfo __parentElementInfo = null;
	private static com.liquid_technologies.ltxmllib19.ElementInfo[] __elementInfo = null;
	private static com.liquid_technologies.ltxmllib19.AttributeInfo[] __attributeInfo = null;
		
	protected com.liquid_technologies.ltxmllib19.ParentElementInfo getClassInfo() throws Exception {
		if (__parentElementInfo == null) {
			__parentElementInfo = new com.liquid_technologies.ltxmllib19.ParentElementInfo(	
																	com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementGroupType.SEQUENCE,
																	com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, "_x0037_5", "", true, false,
																	null, null, com.liquid_technologies.ltxmllib19.Conversions.ConversionType.TYPE_NONE, com.liquid_technologies.ltxmllib19.WhitespaceRule.NONE, null, false);
		}
		return __parentElementInfo;
	}

	protected com.liquid_technologies.ltxmllib19.ElementInfo[] getClassElementInfo() throws Exception {
		if (__elementInfo == null) {
			__elementInfo = new com.liquid_technologies.ltxmllib19.ElementInfo[] {
				 new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0037_7", "", findGetterMethod("schemaLib._x0037_5", "get_x0037_7"), findSetterMethod("schemaLib._x0037_5", "set_x0037_7", "schemaLib._x0037_7"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0037_7.class)
				,new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0037_8", "", findGetterMethod("schemaLib._x0037_5", "get_x0037_8"), findSetterMethod("schemaLib._x0037_5", "set_x0037_8", "schemaLib._x0037_8"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0037_8.class)
				,new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0037_9", "", findGetterMethod("schemaLib._x0037_5", "get_x0037_9"), findSetterMethod("schemaLib._x0037_5", "set_x0037_9", "schemaLib._x0037_9A"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0037_9A.class)
			};
		}
		return __elementInfo;
	}

	protected com.liquid_technologies.ltxmllib19.AttributeInfo[] getClassAttributeInfo() throws Exception {
		if (__attributeInfo==null) {
			__attributeInfo = new com.liquid_technologies.ltxmllib19.AttributeInfo[] {
			};
		}
		return __attributeInfo;
	}

// ##HAND_CODED_BLOCK_START ID="Additional Methods"## DO NOT MODIFY ANYTHING OUTSIDE OF THESE TAGS

// Add Additional Methods and members here...

// ##HAND_CODED_BLOCK_END ID="Additional Methods"## DO NOT MODIFY ANYTHING OUTSIDE OF THESE TAGS
}


