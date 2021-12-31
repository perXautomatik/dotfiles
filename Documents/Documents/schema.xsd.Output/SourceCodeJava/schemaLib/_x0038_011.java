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
// This class represents the ComplexType _x0038_011
// </summary>
public class _x0038_011 extends com.liquid_technologies.ltxmllib19.XmlGeneratedClass {
	private static final long serialVersionUID = 13L;

	// <summary>
	// 	Constructor for _x0038_011
	// </summary>
	// <remarks>
	// The class is created with all the mandatory fields populated with the
	// default data. 
	// All Collection object are created.
	// However any 1-n relationships (these are represented as collections) are
	// empty. To comply with the schema these must be populated before the xml
	// obtained from ToXml is valid against the schema C:/Users/chris/OneDrive/Dokument/schema.xsd
	// </remarks>
	public _x0038_011() {
		setElementName("_x0038_011");
		init();
	}
	public _x0038_011(String elementName) {
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
			__x0038_013 = null;
			__x0038_015 = null;
			__x0038_016 = null;
			__x0038_017 = null;
			__x0038_018 = null;
			__x0038_019 = null;
			__x0038_042 = null;

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
			schemaLib._x0038_011 newObject = (schemaLib._x0038_011)super.clone();

			// clone, creates a bitwise copy of the class, so all the collections are the
			// same as the parents. Init will re-create our own collections, and classes, 
			// preventing objects being shared between the new an original objects
			newObject.init();
			newObject.__x0038_013 = null;
			if (__x0038_013 != null)
				newObject.__x0038_013 = (schemaLib._x0038_013)__x0038_013.clone();
			newObject.__x0038_015 = null;
			if (__x0038_015 != null)
				newObject.__x0038_015 = (schemaLib._x0038_015)__x0038_015.clone();
			newObject.__x0038_016 = null;
			if (__x0038_016 != null)
				newObject.__x0038_016 = (schemaLib._x0038_016)__x0038_016.clone();
			newObject.__x0038_017 = null;
			if (__x0038_017 != null)
				newObject.__x0038_017 = (schemaLib._x0038_017)__x0038_017.clone();
			newObject.__x0038_018 = null;
			if (__x0038_018 != null)
				newObject.__x0038_018 = (schemaLib._x0038_018)__x0038_018.clone();
			newObject.__x0038_019 = null;
			if (__x0038_019 != null)
				newObject.__x0038_019 = (schemaLib._x0038_019)__x0038_019.clone();
			newObject.__x0038_042 = null;
			if (__x0038_042 != null)
				newObject.__x0038_042 = (schemaLib._x0038_042)__x0038_042.clone();
	
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
	public schemaLib._x0038_013 get_x0038_013() {
		return __x0038_013;  
	}
	public void set_x0038_013(schemaLib._x0038_013 value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0038_013 = null;
		else {
			setElementName(value.getBase(), "_x0038_013");
			__x0038_013 = value; 
		}
	}
	protected schemaLib._x0038_013 __x0038_013;

	// <summary>
	// Represents an optional Element in the XML document
	// </summary>
	// <remarks>
	// This property is represented as an Element in the XML.
	// It is optional, initially it is null.

	// </remarks>
	public schemaLib._x0038_015 get_x0038_015() {
		return __x0038_015;  
	}
	public void set_x0038_015(schemaLib._x0038_015 value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0038_015 = null;
		else {
			setElementName(value.getBase(), "_x0038_015");
			__x0038_015 = value; 
		}
	}
	protected schemaLib._x0038_015 __x0038_015;

	// <summary>
	// Represents an optional Element in the XML document
	// </summary>
	// <remarks>
	// This property is represented as an Element in the XML.
	// It is optional, initially it is null.

	// </remarks>
	public schemaLib._x0038_016 get_x0038_016() {
		return __x0038_016;  
	}
	public void set_x0038_016(schemaLib._x0038_016 value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0038_016 = null;
		else {
			setElementName(value.getBase(), "_x0038_016");
			__x0038_016 = value; 
		}
	}
	protected schemaLib._x0038_016 __x0038_016;

	// <summary>
	// Represents an optional Element in the XML document
	// </summary>
	// <remarks>
	// This property is represented as an Element in the XML.
	// It is optional, initially it is null.

	// </remarks>
	public schemaLib._x0038_017 get_x0038_017() {
		return __x0038_017;  
	}
	public void set_x0038_017(schemaLib._x0038_017 value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0038_017 = null;
		else {
			setElementName(value.getBase(), "_x0038_017");
			__x0038_017 = value; 
		}
	}
	protected schemaLib._x0038_017 __x0038_017;

	// <summary>
	// Represents an optional Element in the XML document
	// </summary>
	// <remarks>
	// This property is represented as an Element in the XML.
	// It is optional, initially it is null.

	// </remarks>
	public schemaLib._x0038_018 get_x0038_018() {
		return __x0038_018;  
	}
	public void set_x0038_018(schemaLib._x0038_018 value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0038_018 = null;
		else {
			setElementName(value.getBase(), "_x0038_018");
			__x0038_018 = value; 
		}
	}
	protected schemaLib._x0038_018 __x0038_018;

	// <summary>
	// Represents an optional Element in the XML document
	// </summary>
	// <remarks>
	// This property is represented as an Element in the XML.
	// It is optional, initially it is null.

	// </remarks>
	public schemaLib._x0038_019 get_x0038_019() {
		return __x0038_019;  
	}
	public void set_x0038_019(schemaLib._x0038_019 value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0038_019 = null;
		else {
			setElementName(value.getBase(), "_x0038_019");
			__x0038_019 = value; 
		}
	}
	protected schemaLib._x0038_019 __x0038_019;

	// <summary>
	// Represents an optional Element in the XML document
	// </summary>
	// <remarks>
	// This property is represented as an Element in the XML.
	// It is optional, initially it is null.

	// </remarks>
	public schemaLib._x0038_042 get_x0038_042() {
		return __x0038_042;  
	}
	public void set_x0038_042(schemaLib._x0038_042 value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0038_042 = null;
		else {
			setElementName(value.getBase(), "_x0038_042");
			__x0038_042 = value; 
		}
	}
	protected schemaLib._x0038_042 __x0038_042;

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
																	com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, "_x0038_011", "", true, false,
																	null, null, com.liquid_technologies.ltxmllib19.Conversions.ConversionType.TYPE_NONE, com.liquid_technologies.ltxmllib19.WhitespaceRule.NONE, null, false);
		}
		return __parentElementInfo;
	}

	protected com.liquid_technologies.ltxmllib19.ElementInfo[] getClassElementInfo() throws Exception {
		if (__elementInfo == null) {
			__elementInfo = new com.liquid_technologies.ltxmllib19.ElementInfo[] {
				 new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0038_013", "", findGetterMethod("schemaLib._x0038_011", "get_x0038_013"), findSetterMethod("schemaLib._x0038_011", "set_x0038_013", "schemaLib._x0038_013"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0038_013.class)
				,new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0038_015", "", findGetterMethod("schemaLib._x0038_011", "get_x0038_015"), findSetterMethod("schemaLib._x0038_011", "set_x0038_015", "schemaLib._x0038_015"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0038_015.class)
				,new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0038_016", "", findGetterMethod("schemaLib._x0038_011", "get_x0038_016"), findSetterMethod("schemaLib._x0038_011", "set_x0038_016", "schemaLib._x0038_016"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0038_016.class)
				,new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0038_017", "", findGetterMethod("schemaLib._x0038_011", "get_x0038_017"), findSetterMethod("schemaLib._x0038_011", "set_x0038_017", "schemaLib._x0038_017"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0038_017.class)
				,new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0038_018", "", findGetterMethod("schemaLib._x0038_011", "get_x0038_018"), findSetterMethod("schemaLib._x0038_011", "set_x0038_018", "schemaLib._x0038_018"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0038_018.class)
				,new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0038_019", "", findGetterMethod("schemaLib._x0038_011", "get_x0038_019"), findSetterMethod("schemaLib._x0038_011", "set_x0038_019", "schemaLib._x0038_019"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0038_019.class)
				,new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0038_042", "", findGetterMethod("schemaLib._x0038_011", "get_x0038_042"), findSetterMethod("schemaLib._x0038_011", "set_x0038_042", "schemaLib._x0038_042"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0038_042.class)
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


