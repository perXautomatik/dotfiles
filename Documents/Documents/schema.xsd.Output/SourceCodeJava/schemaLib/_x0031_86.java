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
// This class represents the ComplexType _x0031_86
// </summary>
public class _x0031_86 extends com.liquid_technologies.ltxmllib19.XmlGeneratedClass {
	private static final long serialVersionUID = 13L;

	// <summary>
	// 	Constructor for _x0031_86
	// </summary>
	// <remarks>
	// The class is created with all the mandatory fields populated with the
	// default data. 
	// All Collection object are created.
	// However any 1-n relationships (these are represented as collections) are
	// empty. To comply with the schema these must be populated before the xml
	// obtained from ToXml is valid against the schema C:/Users/chris/OneDrive/Dokument/schema.xsd
	// </remarks>
	public _x0031_86() {
		setElementName("_x0031_86");
		init();
	}
	public _x0031_86(String elementName) {
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
			__x0031_90 = null;
			__x0031_96 = null;
			__x0032_04 = null;
			__x0032_09 = null;
			__x0032_14 = null;
			__x0032_19 = null;
			__x0032_28 = null;

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
			schemaLib._x0031_86 newObject = (schemaLib._x0031_86)super.clone();

			// clone, creates a bitwise copy of the class, so all the collections are the
			// same as the parents. Init will re-create our own collections, and classes, 
			// preventing objects being shared between the new an original objects
			newObject.init();
			newObject.__x0031_90 = null;
			if (__x0031_90 != null)
				newObject.__x0031_90 = (schemaLib._x0031_90)__x0031_90.clone();
			newObject.__x0031_96 = null;
			if (__x0031_96 != null)
				newObject.__x0031_96 = (schemaLib._x0031_96)__x0031_96.clone();
			newObject.__x0032_04 = null;
			if (__x0032_04 != null)
				newObject.__x0032_04 = (schemaLib._x0032_04)__x0032_04.clone();
			newObject.__x0032_09 = null;
			if (__x0032_09 != null)
				newObject.__x0032_09 = (schemaLib._x0032_09)__x0032_09.clone();
			newObject.__x0032_14 = null;
			if (__x0032_14 != null)
				newObject.__x0032_14 = (schemaLib._x0032_14)__x0032_14.clone();
			newObject.__x0032_19 = null;
			if (__x0032_19 != null)
				newObject.__x0032_19 = (schemaLib._x0032_19)__x0032_19.clone();
			newObject.__x0032_28 = null;
			if (__x0032_28 != null)
				newObject.__x0032_28 = (schemaLib._x0032_28)__x0032_28.clone();
	
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
	public schemaLib._x0031_90 get_x0031_90() {
		return __x0031_90;  
	}
	public void set_x0031_90(schemaLib._x0031_90 value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0031_90 = null;
		else {
			setElementName(value.getBase(), "_x0031_90");
			__x0031_90 = value; 
		}
	}
	protected schemaLib._x0031_90 __x0031_90;

	// <summary>
	// Represents an optional Element in the XML document
	// </summary>
	// <remarks>
	// This property is represented as an Element in the XML.
	// It is optional, initially it is null.

	// </remarks>
	public schemaLib._x0031_96 get_x0031_96() {
		return __x0031_96;  
	}
	public void set_x0031_96(schemaLib._x0031_96 value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0031_96 = null;
		else {
			setElementName(value.getBase(), "_x0031_96");
			__x0031_96 = value; 
		}
	}
	protected schemaLib._x0031_96 __x0031_96;

	// <summary>
	// Represents an optional Element in the XML document
	// </summary>
	// <remarks>
	// This property is represented as an Element in the XML.
	// It is optional, initially it is null.

	// </remarks>
	public schemaLib._x0032_04 get_x0032_04() {
		return __x0032_04;  
	}
	public void set_x0032_04(schemaLib._x0032_04 value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0032_04 = null;
		else {
			setElementName(value.getBase(), "_x0032_04");
			__x0032_04 = value; 
		}
	}
	protected schemaLib._x0032_04 __x0032_04;

	// <summary>
	// Represents an optional Element in the XML document
	// </summary>
	// <remarks>
	// This property is represented as an Element in the XML.
	// It is optional, initially it is null.

	// </remarks>
	public schemaLib._x0032_09 get_x0032_09() {
		return __x0032_09;  
	}
	public void set_x0032_09(schemaLib._x0032_09 value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0032_09 = null;
		else {
			setElementName(value.getBase(), "_x0032_09");
			__x0032_09 = value; 
		}
	}
	protected schemaLib._x0032_09 __x0032_09;

	// <summary>
	// Represents an optional Element in the XML document
	// </summary>
	// <remarks>
	// This property is represented as an Element in the XML.
	// It is optional, initially it is null.

	// </remarks>
	public schemaLib._x0032_14 get_x0032_14() {
		return __x0032_14;  
	}
	public void set_x0032_14(schemaLib._x0032_14 value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0032_14 = null;
		else {
			setElementName(value.getBase(), "_x0032_14");
			__x0032_14 = value; 
		}
	}
	protected schemaLib._x0032_14 __x0032_14;

	// <summary>
	// Represents an optional Element in the XML document
	// </summary>
	// <remarks>
	// This property is represented as an Element in the XML.
	// It is optional, initially it is null.

	// </remarks>
	public schemaLib._x0032_19 get_x0032_19() {
		return __x0032_19;  
	}
	public void set_x0032_19(schemaLib._x0032_19 value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0032_19 = null;
		else {
			setElementName(value.getBase(), "_x0032_19");
			__x0032_19 = value; 
		}
	}
	protected schemaLib._x0032_19 __x0032_19;

	// <summary>
	// Represents an optional Element in the XML document
	// </summary>
	// <remarks>
	// This property is represented as an Element in the XML.
	// It is optional, initially it is null.

	// </remarks>
	public schemaLib._x0032_28 get_x0032_28() {
		return __x0032_28;  
	}
	public void set_x0032_28(schemaLib._x0032_28 value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0032_28 = null;
		else {
			setElementName(value.getBase(), "_x0032_28");
			__x0032_28 = value; 
		}
	}
	protected schemaLib._x0032_28 __x0032_28;

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
																	com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, "_x0031_86", "", true, false,
																	null, null, com.liquid_technologies.ltxmllib19.Conversions.ConversionType.TYPE_NONE, com.liquid_technologies.ltxmllib19.WhitespaceRule.NONE, null, false);
		}
		return __parentElementInfo;
	}

	protected com.liquid_technologies.ltxmllib19.ElementInfo[] getClassElementInfo() throws Exception {
		if (__elementInfo == null) {
			__elementInfo = new com.liquid_technologies.ltxmllib19.ElementInfo[] {
				 new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0031_90", "", findGetterMethod("schemaLib._x0031_86", "get_x0031_90"), findSetterMethod("schemaLib._x0031_86", "set_x0031_90", "schemaLib._x0031_90"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0031_90.class)
				,new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0031_96", "", findGetterMethod("schemaLib._x0031_86", "get_x0031_96"), findSetterMethod("schemaLib._x0031_86", "set_x0031_96", "schemaLib._x0031_96"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0031_96.class)
				,new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0032_04", "", findGetterMethod("schemaLib._x0031_86", "get_x0032_04"), findSetterMethod("schemaLib._x0031_86", "set_x0032_04", "schemaLib._x0032_04"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0032_04.class)
				,new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0032_09", "", findGetterMethod("schemaLib._x0031_86", "get_x0032_09"), findSetterMethod("schemaLib._x0031_86", "set_x0032_09", "schemaLib._x0032_09"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0032_09.class)
				,new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0032_14", "", findGetterMethod("schemaLib._x0031_86", "get_x0032_14"), findSetterMethod("schemaLib._x0031_86", "set_x0032_14", "schemaLib._x0032_14"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0032_14.class)
				,new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0032_19", "", findGetterMethod("schemaLib._x0031_86", "get_x0032_19"), findSetterMethod("schemaLib._x0031_86", "set_x0032_19", "schemaLib._x0032_19"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0032_19.class)
				,new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0032_28", "", findGetterMethod("schemaLib._x0031_86", "get_x0032_28"), findSetterMethod("schemaLib._x0031_86", "set_x0032_28", "schemaLib._x0032_28"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0032_28.class)
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


